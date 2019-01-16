extern crate select;
extern crate reqwest;
use std::io::Read;
use select::document::Document;
use select::predicate::{Class, Name, Predicate};

fn crawl(url: &str) ->  Vec<String> {
    let mut response = reqwest::get(url)
        .expect("Failed to send request");

    println!("Getting data from {}", url);
    let mut body = String::new();
    response.read_to_string(&mut body).expect("Failed to read response");

    let document = Document::from(&*body);

    println!("Finding nodes...");

    let teams_from_serie = document
        .find(Class("table").descendant(Name("a")))
        .map(|name| name.text())
        .collect::<Vec<_>>();

    return teams_from_serie
}

pub fn main() {
    let teams_series = vec!["a", "b"];
    let all_teams = teams_series
        .iter()
        .fold(vec![], |mut acc, serie| {
            let url = format!("https://www.gazetaesportiva.com/campeonatos/brasileiro-serie-{}/", serie);
            acc.push(crawl(&url));
            acc
        })
        .into_iter()
        .flatten()
        .collect::<Vec<_>>();

    println!("All teams: {:?}", all_teams);
}
