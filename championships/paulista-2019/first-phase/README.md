# Scraping - Campeonato Paulista 2019 - Primeira Fase

## Goal

### Running
```sh
$ node index.js
```

### Expected Result
```json
{
  "teams": [
    {
      "name": "Santos",
      "id": "SAN"
    },
    {
      "name": "São Caetano",
      "id": "SCA"
    },
    {
      "name": "RB Brasil",
      "id": "RBB"
    },
    {
      "name": "Ponte Preta",
      "id": "PON"
    },
    {
      "name": "Palmeiras",
      "id": "PAL"
    },
    {
      "name": "São Bento",
      "id": "SBN"
    },
    {
      "name": "Novorizontino",
      "id": "NOV"
    },
    {
      "name": "Guarani",
      "id": "GUA"
    },
    {
      "name": "Bragantino",
      "id": "BRA"
    },
    {
      "name": "Corinthians",
      "id": "COR"
    },
    {
      "name": "Ferroviária",
      "id": "FER"
    },
    {
      "name": "Mirassol",
      "id": "MIR"
    },
    {
      "name": "São Paulo",
      "id": "SAO"
    },
    {
      "name": "Botafogo-SP",
      "id": "BOT"
    },
    {
      "name": "Oeste",
      "id": "OES"
    },
    {
      "name": "Ituano",
      "id": "ITU"
    }
  ],
  "groups": [
    {
      "name": "Grupo A",
      "ranking": [
        {
          "id": "SAN",
          "stats": {
            "P": "3",
            "J": "1",
            "V": "1",
            "E": "0",
            "D": "0",
            "GP": "1",
            "GC": "0",
            "SG": "1",
            "%": "100",
            "ÚLT. JOGOS": ""
          }
        },
        {
          "id": "SCA",
          "stats": {
            "P": "1",
            "J": "1",
            "V": "0",
            "E": "1",
            "D": "0",
            "GP": "1",
            "GC": "1",
            "SG": "0",
            "%": "33.3",
            "ÚLT. JOGOS": ""
          }
        },
        {
          "id": "RBB",
          "stats": {
            "P": "1",
            "J": "1",
            "V": "0",
            "E": "1",
            "D": "0",
            "GP": "1",
            "GC": "1",
            "SG": "0",
            "%": "33.3",
            "ÚLT. JOGOS": ""
          }
        },
        {
          "id": "PON",
          "stats": {
            "P": "1",
            "J": "1",
            "V": "0",
            "E": "1",
            "D": "0",
            "GP": "0",
            "GC": "0",
            "SG": "0",
            "%": "33.3",
            "ÚLT. JOGOS": ""
          }
        }
      ]
    },
    {
      "name": "Grupo B",
      "ranking": [
        {
          "id": "PAL",
          "stats": {
            "P": "1",
            "J": "1",
            "V": "0",
            "E": "1",
            "D": "0",
            "GP": "1",
            "GC": "1",
            "SG": "0",
            "%": "33.3",
            "ÚLT. JOGOS": ""
          }
        },
        {
          "id": "SBN",
          "stats": {
            "P": "1",
            "J": "1",
            "V": "0",
            "E": "1",
            "D": "0",
            "GP": "1",
            "GC": "1",
            "SG": "0",
            "%": "33.3",
            "ÚLT. JOGOS": ""
          }
        },
        {
          "id": "NOV",
          "stats": {
            "P": "0",
            "J": "0",
            "V": "0",
            "E": "0",
            "D": "0",
            "GP": "0",
            "GC": "0",
            "SG": "0",
            "%": "0",
            "ÚLT. JOGOS": ""
          }
        },
        {
          "id": "GUA",
          "stats": {
            "P": "0",
            "J": "1",
            "V": "0",
            "E": "0",
            "D": "1",
            "GP": "0",
            "GC": "1",
            "SG": "-1",
            "%": "0",
            "ÚLT. JOGOS": ""
          }
        }
      ]
    },
    {
      "name": "Grupo C",
      "ranking": [
        {
          "id": "BRA",
          "stats": {
            "P": "3",
            "J": "1",
            "V": "1",
            "E": "0",
            "D": "0",
            "GP": "1",
            "GC": "0",
            "SG": "1",
            "%": "100",
            "ÚLT. JOGOS": ""
          }
        },
        {
          "id": "COR",
          "stats": {
            "P": "1",
            "J": "1",
            "V": "0",
            "E": "1",
            "D": "0",
            "GP": "1",
            "GC": "1",
            "SG": "0",
            "%": "33.3",
            "ÚLT. JOGOS": ""
          }
        },
        {
          "id": "FER",
          "stats": {
            "P": "0",
            "J": "1",
            "V": "0",
            "E": "0",
            "D": "1",
            "GP": "0",
            "GC": "1",
            "SG": "-1",
            "%": "0",
            "ÚLT. JOGOS": ""
          }
        },
        {
          "id": "MIR",
          "stats": {
            "P": "0",
            "J": "1",
            "V": "0",
            "E": "0",
            "D": "1",
            "GP": "1",
            "GC": "4",
            "SG": "-3",
            "%": "0",
            "ÚLT. JOGOS": ""
          }
        }
      ]
    },
    {
      "name": "Grupo D",
      "ranking": [
        {
          "id": "SAO",
          "stats": {
            "P": "3",
            "J": "1",
            "V": "1",
            "E": "0",
            "D": "0",
            "GP": "4",
            "GC": "1",
            "SG": "3",
            "%": "100",
            "ÚLT. JOGOS": ""
          }
        },
        {
          "id": "BOT",
          "stats": {
            "P": "1",
            "J": "1",
            "V": "0",
            "E": "1",
            "D": "0",
            "GP": "1",
            "GC": "1",
            "SG": "0",
            "%": "33.3",
            "ÚLT. JOGOS": ""
          }
        },
        {
          "id": "OES",
          "stats": {
            "P": "1",
            "J": "1",
            "V": "0",
            "E": "1",
            "D": "0",
            "GP": "0",
            "GC": "0",
            "SG": "0",
            "%": "33.3",
            "ÚLT. JOGOS": ""
          }
        },
        {
          "id": "ITU",
          "stats": {
            "P": "0",
            "J": "0",
            "V": "0",
            "E": "0",
            "D": "0",
            "GP": "0",
            "GC": "0",
            "SG": "0",
            "%": "0",
            "ÚLT. JOGOS": ""
          }
        }
      ]
    }
  ]
}
```