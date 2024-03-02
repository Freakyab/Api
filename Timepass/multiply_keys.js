// Require modules
const { MongoClient } = require("mongodb");
const express = require("express");
const router = express.Router();

const jwt = require('jsonwebtoken');

require("dotenv").config();

//connect to mongodb database
const client = new MongoClient(process.env.DB_URL, {
    useUnifiedTopology: true,
});

router.get("/", async (req, res) => {
    // const { username, password } = req.body;
    try {

        //connect to database
        const keywordsArray = [
            "Sustainability", "Inclusivity", "Game-changing", "Innovative", "Technology", "Global", "Integrity", "Unconventional",
            "Collaborative", "Example", "Unique", "Proposition", "Precision", "Human-centric", "Strategic", "Partnerships", "Industry",
            "Disruptor", "Ecosystem", "Visionary", "Leadership", "Client", "Empowerment", "Expertise", "Dynamic", "Approach", "Engineering",
            "Cultural", "Diversity", "Social", "Responsibility", "Thinking", "Seamless", "Integration", "Execution", "Next-gen", "Solutions",
            "Data-driven", "Insights", "Network", "Customer-centric", "Innovation", "Tailored", "Strategies", "Bespoke", "Designs", "Adaptive",
            "Leadership", "Revolving", "Breakthroughs", "Experiences", "Analytics", "Loyalty", "Programs", "Research", "Transformation", "Ethical",
            "Sourcing", "Assurance", "Intelligence", "Workplace", "Ideation", "Recognition", "Design", "Responsibility", "Breakthroughs",
            "Methodologies", "Holistic", "Connection", "Technologies", "Continuous", "Improvement", "Benchmark", "Focused", "Influencers", "Progress",
            "Trailblazers", "Momentum", "Delivery", "High-performance", "Integration", "Collaboration", "Ideation", "Thinking", "Problem-solving",
            "Market", "Innovation", "Wisdom", "Communication", "Recognition", "Management", "Planning", "Unparalleled", "Commitment", "Communication",
            "Trailblazers", "Analysis", "Citizenship", "Marketplace", "Velocity", "Profitability", "Revenue", "ROI", "Cost-effective", "Financial",
            "Capital", "Investment", "Economic", "Profit", "Budgeting", "Cash flow", "Funding", "Assets", "Liabilities", "Capitalization", "Portfolio",
            "Stakeholder", "Shareholder", "Dividends", "Liquidity", "Market share", "Monetization", "Competitive", "Payout", "Overhead", "Entrepreneurship",
            "Business model", "Monetization", "Economic", "Viability", "Commercialization", "Venture", "Expansion", "Capital gain", "Share price",
            "Stockholders", "Financial growth", "Fiscal", "Inflation", "Procurement", "Leverage", "Equity", "IPO", "Merger", "Acquisition", "Buyout",
            "Liquidation", "Solvency", "Trade", "Gross margin"
          ];
          
          // Remove duplicates
          const uniqueKeywordsArray = Array.from(new Set(keywordsArray));
          
          // Display the unique array in the console
          console.log(uniqueKeywordsArray);
          

    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});

module.exports = router;