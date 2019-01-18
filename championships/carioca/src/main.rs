extern crate itertools;
extern crate select;
extern crate reqwest;
extern crate regex;
use std::io::Read;
use select::document::Document;
use select::predicate::{Class, Name, Predicate};
use regex::Regex;
use std::str;
use itertools::Itertools;

fn crawl_description(url: &str){
    let note_cite = Regex::new(r"\[[1-9]\]").unwrap();

    let mut response = reqwest::get(url)
        .expect("Failed to send request [crawl_description]");

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

fn crawl_teams(url: &str){
    let mut response = reqwest::get(url)
        .expect("Failed to send request [crawl_teams]");

    println!("Getting data from {}", url);
    let mut body = String::new();
    response.read_to_string(&mut body).expect("Failed to read response");

    let document = Document::from(&*body);

    println!("Finding nodes...");

    let teams = document
        .find(Name("table"))
        .take(1)
        .map(|node| {
            let team_name = node
                .find(Name("td").descendant(Name("a")))
                .map(|team| {
                    println!("team {:?}", team);
                    return team.text()
                })
                .collect::<Vec<_>>();
            team_name
        })
        .flatten()
        .collect::<Vec<_>>();

    for team in teams.chunks(2) {
        println!("All teams and cities: {:?}", team);
    }
}

pub fn main() {
    let url_description = "https://pt.wikipedia.org/wiki/Campeonato_Carioca_de_Futebol".to_string();
    let url_teams = "https://pt.wikipedia.org/wiki/Lista_de_clubes_de_futebol_do_Rio_de_Janeiro#_Campeonato_Carioca_2018";
    // crawl_description(&url_description);
    crawl_teams(&url_teams);
}
