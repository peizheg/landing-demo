"use client";

import _ from "lodash"
import Marquee from "react-fast-marquee"

// Logo data with name and image path
const logos = [
  { name: "Postgres", src: "/postgres.png" },
  { name: "DuckDB", src: "/duckdb.png" },
  { name: "Peliqan", src: "/peliqan.png" },
  { name: "LinkedIn", src: "/linkedin-2.png" },
  { name: "Airtable", src: "/airtable.png" },
  { name: "Snowflake", src: "/snowflake.png" },
  { name: "DynamoDB", src: "/dynamodb.png" },
  { name: "CSV", src: "/csv.png" },
  { name: "SQLite", src: "/sqlite.png" },
  { name: "BigQuery", src: "/bigquery.png" },
  { name: "MongoDB", src: "/mongodb.png" },
  { name: "Motherduck", src: "/motherduck.png" },
  { name: "Clickhouse", src: "/clickhouse.png" },
  { name: "Excel", src: "/excel.png" },
  { name: "MySQL", src: "/mysql.png" },
  { name: "Supabase", src: "/supabase.png" },
  { name: "Sheets", src: "/sheets.png" },
  { name: "Salesforce", src: "/salesforce.png" },
]


const Carousel = () => {
  return (
    <div className="w-full bg-[#0d1014] py-15">
      <div className="relative py-15 max-w-7xl mx-auto">
        <div className="absolute top-0 bg-[url(/background.png)] bg-contain w-full h-full"></div>
        <div className="absolute top-0 bg-gradient-to-b from-transparent from-70% to-[#0d1014] w-full h-full"></div>
        <div className="absolute top-0 bg-[#0d101440] bg-contain w-full h-full"></div>

          <Marquee speed={8} pauseOnHover={true} gradient={true} gradientColor="#0d1014" direction="left" className="h-30">
            {logos.map(logo => (
              <div
                className="mx-2 relative cursor-pointer transition-all duration-300 ease-in-out"
                key={logo.name}
              >
                <div
                  className="w-24 h-24 relative transition-all duration-300 ease-in-out hover:scale-110 brightness-50 hover:brightness-100 hover:filter"
                >
                  <img src={logo.src} alt={`${logo.name} logo`} className="object-contain" />
              </div>
            </div>
            ))}
          </Marquee>

          <Marquee speed={8} pauseOnHover={true} gradient={true} gradientColor="#0d1014" direction="right" className="h-30 -mt-1">
            {(_.shuffle(logos)).map(logo => (
              <div
                className="mx-2 relative cursor-pointer transition-all duration-300 ease-in-out"
                key={logo.name}
              >
                <div
                  className="w-24 h-24 relative transition-all duration-300 ease-in-out hover:scale-110 brightness-50 hover:brightness-100 hover:filter"
                >
                  <img src={logo.src} alt={`${logo.name} logo`} className="object-contain" />
              </div>
            </div>
            ))}
          </Marquee>
      </div>
      
    </div>
  )
}

export default Carousel