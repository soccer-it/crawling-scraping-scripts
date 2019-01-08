extern crate select;
extern crate reqwest;
use std::io::Read;
use select::document::Document;
use select::predicate::{Class, Name, Predicate};

fn crawl(url: &str) {
    let mut response = reqwest::get(url)
        .expect("Failed to send request");

    println!("Getting data from {} ...", url);
    let mut body = String::new();
    response.read_to_string(&mut body).expect("Failed to read response");

    let document = Document::from(&*body);

    println!("Finding nodes...");

    let teams_serie_a = document
        .find(Class("table").descendant(Name("a")))
        .map(|name| name.text())
        .collect::<Vec<_>>();

    println!("Serie A:\n");
    println!("{}", teams_serie_a.join("\n"))
}

pub fn main() {
    let url = "https://www.gazetaesportiva.com/campeonatos/brasileiro-serie-a/".to_string();
    crawl(&url)
}
