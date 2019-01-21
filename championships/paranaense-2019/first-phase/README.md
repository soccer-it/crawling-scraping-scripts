# Scraping - Campeonato Paranaense 2019 - Primeira Fase

## Goal

### Running
```sh
$ node championships/paranaense-2019/first-phase
```

### Expected Result
```json
{
	"teams": [
		{
			"name": "Operário-PR",
			"id": "OPE"
		},
		{
			"name": "Maringá",
			"id": "MAR"
		},
		{
			"name": "Londrina",
			"id": "LON"
		},
		{
			"name": "Toledo",
			"id": "TOL"
		},
		{
			"name": "Athletico-PR",
			"id": "CAP"
		},
		{
			"name": "Foz do Iguaçu",
			"id": "FOZ"
		},
		{
			"name": "Coritiba",
			"id": "CFC"
		},
		{
			"name": "Cascavel CR",
			"id": "CCR"
		},
		{
			"name": "Rio Branco-PR",
			"id": "RPR"
		},
		{
			"name": "Cascavel FC",
			"id": "FCC"
		},
		{
			"name": "Cianorte",
			"id": "CIA"
		},
		{
			"name": "Paraná",
			"id": "PAR"
		}
	],
	"groups": [
		{
			"name": "Grupo A",
			"ranking": [
				{
					"id": "OPE",
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
					"id": "MAR",
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
					"id": "LON",
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
					"id": "TOL",
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
					"id": "CAP",
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
					"id": "FOZ",
					"stats": {
						"P": "0",
						"J": "1",
						"V": "0",
						"E": "0",
						"D": "1",
						"GP": "0",
						"GC": "4",
						"SG": "-4",
						"%": "0",
						"ÚLT. JOGOS": ""
					}
				}
			]
		},
		{
			"name": "Grupo B",
			"ranking": [
				{
					"id": "CFC",
					"stats": {
						"P": "3",
						"J": "1",
						"V": "1",
						"E": "0",
						"D": "0",
						"GP": "4",
						"GC": "0",
						"SG": "4",
						"%": "100",
						"ÚLT. JOGOS": ""
					}
				},
				{
					"id": "CCR",
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
					"id": "RPR",
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
					"id": "FCC",
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
					"id": "CIA",
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
					"id": "PAR",
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
		}
	]
}
```