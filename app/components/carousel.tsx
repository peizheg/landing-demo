"use client";

import _ from "lodash"
import Marquee from "react-fast-marquee"

// Logo data with name and image path
const logos = [
  { name: "Postgres", src: "/postgres.png" },
  { name: "DuckDB", src: "/duckdb.png" },
  { name: "Peliqan", src: "/peliqan.png" },
  { name: "LinkedIn", src: "/linkedin.png" },
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
    <div className="w-full bg-[#0C0F12] py-30">
      <div className="max-w-7xl mx-auto">
        <Marquee speed={8} pauseOnHover={true} gradient={true} gradientColor="#0C0F12" direction="left" className="h-30">
          {logos.map((logo, index) => (
            <div
              className="mx-2 relative cursor-pointer transition-all duration-300 ease-in-out"
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

      <div className="max-w-7xl mx-auto -mt-1">
        <Marquee speed={8} pauseOnHover={true} gradient={true} gradientColor="#0C0F12" direction="right" className="h-30">
          {(_.shuffle(logos)).map((logo, index) => (
            <div
              className="mx-2 relative cursor-pointer transition-all duration-300 ease-in-out"
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