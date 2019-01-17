extern crate select;
extern crate reqwest;
extern crate regex;
use std::io::Read;
use select::document::Document;
use select::predicate::{Class, Name};
use regex::Regex;

fn crawl(url: &str){
    let note_cite = Regex::new(r"\[[1-9]\]").unwrap();

    let mut response = reqwest::get(url)
        .expect("Failed to send request");

    println!("Getting data from {}", url);
    let mut body = String::new();
    response.read_to_string(&mut body).expect("Failed to read response");

    let document = Document::from(&*body);

    println!("Finding nodes...");

    let description = document
        .find(Name("p"))
        .take(5)
        .map(|name| name.text())
        .collect::<Vec<_>>()
        .join("")
        .replace("\n", "");

    let description_formatted = note_cite.replace_all(&description, "");

    println!("Description: {}", description_formatted)
}

pub fn main() {
    let url = "https://pt.wikipedia.org/wiki/Campeonato_Carioca_de_Futebol".to_string();
    crawl(&url)
}
