const companyData = [
  {
    name: "TagzFoods",
    idea: "Healthy Potato Chips Snacks",
    type: "Food",
    website: "https://tagzfoods.com/",
    head_office_address: "Bangalore",
    founded_on: 2019.0,
    deal_amount: 70.0,
    deal_equity: 1.0,
    valuation: 7000.0,
    profit: 48.0,
    revenue: 700.0,
    patents: null,
  },
  {
    name: "CosIQ",
    idea: "Intelligent Skincare",
    type: "Beauty/Fashion",
    website: "https://mycosiq.com/",
    head_office_address: "Delhi",
    founded_on: 2021.0,
    deal_amount: 50.0,
    deal_equity: 7.5,
    valuation: 667.0,
    profit: 75.0,
    revenue: 0.0,
    patents: null,
  },
  {
    name: "Bummer",
    idea: "Underwear",
    type: "Beauty/Fashion",
    website: "https://bummer.in/",
    head_office_address: "Ahmedabad",
    founded_on: 2020.0,
    deal_amount: 75.0,
    deal_equity: 4.0,
    valuation: 1875.0,
    profit: 70.0,
    revenue: 36.0,
    patents: null,
  },
  {
    name: "Menstrupedia",
    idea: "Menstrual Awareness Comic",
    type: "Education",
    website: "https://www.menstrupedia.com/",
    head_office_address: "Ahmedabad",
    founded_on: 2012.0,
    deal_amount: 50.0,
    deal_equity: 10.0,
    valuation: 500.0,
    profit: 27.0,
    revenue: 115.0,
    patents: null,
  },
  {
    name: "BeyondSnack",
    idea: "Kerala Banana Chips",
    type: "Food",
    website: "https://www.beyondsnack.in/",
    head_office_address: "Thiruvananthapuram",
    founded_on: 2020.0,
    deal_amount: 50.0,
    deal_equity: 2.5,
    valuation: 2000.0,
    profit: 51.0,
    revenue: 60.0,
    patents: null,
  },
  {
    name: "Ariro",
    idea: "Wooden Toys",
    type: "Manufacturing",
    website: "https://arirotoys.com/",
    head_office_address: "Chennai",
    founded_on: 2020.0,
    deal_amount: 50.0,
    deal_equity: 2.5,
    valuation: 2000.0,
    profit: 50.0,
    revenue: 300.0,
    patents: null,
  },
  {
    name: "Meatyour",
    idea: "Eggs",
    type: "Food",
    website: "https://meatyour.com/",
    head_office_address: "Pune",
    founded_on: 2020.0,
    deal_amount: 30.0,
    deal_equity: 5.0,
    valuation: 600.0,
    profit: 30.0,
    revenue: 130.0,
    patents: null,
  },
  {
    name: "Gopal's56",
    idea: "Fiber Ice Cream",
    type: "Food",
    website: "https://www.gopals56.in/",
    head_office_address: "Delhi",
    founded_on: 2014.0,
    deal_amount: 30000.0,
    deal_equity: 25.0,
    valuation: 120000.0,
    profit: 21.0,
    revenue: 80.0,
    patents: null,
  },
  {
    name: "Auli",
    idea: "Ayurvedic Products Skincare Lifestyle",
    type: "Beauty/Fashion",
    website: "https://aulilifestyle.com/",
    head_office_address: "Kolkata",
    founded_on: 2017.0,
    deal_amount: 75.0,
    deal_equity: 4.0,
    valuation: 1875.0,
    profit: 80.0,
    revenue: 250.0,
    patents: null,
  },
  {
    name: "Annie",
    idea: "Thinkerbell labs Braille Literary Device",
    type: "Education",
    website: "https://www.thinkerbelllabs.com/annie",
    head_office_address: "Bangalore",
    founded_on: 2016.0,
    deal_amount: 30.0,
    deal_equity: 0.5,
    valuation: 6000.0,
    profit: 50.0,
    revenue: 500.0,
    patents: null,
  },
  {
    name: "Cocofit",
    idea: "Coconut based beverage franchise",
    type: "Food",
    website: "https://www.cocofit.in/",
    head_office_address: "Hyderabad",
    founded_on: 2019.0,
    deal_amount: 0.00005,
    deal_equity: 5.0,
    valuation: 0.0,
    profit: 95.0,
    revenue: 100.0,
    patents: null,
  },
  {
    name: "Anthyesti",
    idea: "Funeral Service the last rites",
    type: "Services",
    website: "https://anthyesti.com/",
    head_office_address: "Bangalore",
    founded_on: 2015.0,
    deal_amount: 50.0,
    deal_equity: 2.5,
    valuation: 2000.0,
    profit: 50.0,
    revenue: 116.0,
    patents: null,
  },
  {
    name: "Get-A-Whey",
    idea: "Sugar-Free Icecream",
    type: "Food",
    website: "https://getawhey.in/",
    head_office_address: "Mumbai",
    founded_on: 2018.0,
    deal_amount: 100.0,
    deal_equity: 8.0,
    valuation: 1250.0,
    profit: 69.0,
    revenue: 360.0,
    patents: null,
  },
  {
    name: "Moonshine",
    idea: "Meads",
    type: "Food",
    website: "https://www.moonshinemeadery.com/",
    head_office_address: "Mumbai",
    founded_on: 2018.0,
    deal_amount: 80.0,
    deal_equity: 0.5,
    valuation: 16000.0,
    profit: 70.0,
    revenue: 372.0,
    patents: null,
  },
  {
    name: "GuardianGears",
    idea: "Motorcycle Luggage bags",
    type: "Manufacturing",
    website: "https://guardiangears.in/",
    head_office_address: "Hyderabad",
    founded_on: 2018.0,
    deal_amount: 30.0,
    deal_equity: 5.0,
    valuation: 600.0,
    profit: 50.0,
    revenue: 250.0,
    patents: null,
  },
  {
    name: "HumpyA2",
    idea: "Organic Milk A2 Products",
    type: "Food",
    website: "https://humpyfarms.com/",
    head_office_address: "Pune",
    founded_on: 2017.0,
    deal_amount: 75.0,
    deal_equity: 4.0,
    valuation: 1875.0,
    profit: 44.0,
    revenue: 208.0,
    patents: null,
  },
  {
    name: "GoldSafeSolutions",
    idea: "Anti-Suicidal Fan Rod",
    type: "Manufacturing",
    website: "https://www.goldlife.co.in/",
    head_office_address: "Mumbai",
    founded_on: 2017.0,
    deal_amount: 50.0,
    deal_equity: 5.0,
    valuation: 1000.0,
    profit: 25.0,
    revenue: 60.0,
    patents: null,
  },
  {
    name: "PDDFalcon",
    idea: "Stainless Steel Items",
    type: "Manufacturing",
    website: "https://falconproducts.co.in/",
    head_office_address: "Gandhinagar",
    founded_on: 2018.0,
    deal_amount: 75.0,
    deal_equity: 3.0,
    valuation: 2500.0,
    profit: 30.0,
    revenue: 242.0,
    patents: null,
  },
  {
    name: "KabaddiAdda",
    idea: "All-Kabaddi App",
    type: "Sports",
    website: "https://www.kabaddiadda.com/",
    head_office_address: "Bangalore",
    founded_on: 2019.0,
    deal_amount: 80.0,
    deal_equity: 1.0,
    valuation: 8000.0,
    profit: 80.0,
    revenue: 250.0,
    patents: null,
  },
  {
    name: "ShadesofSpring",
    idea: "Flowers",
    type: "Services",
    website: "https://shadesofspring.in/",
    head_office_address: "Bangalore",
    founded_on: 2019.0,
    deal_amount: 300.0,
    deal_equity: 1.0,
    valuation: 30000.0,
    profit: 30.0,
    revenue: 900.0,
    patents: null,
  },
  {
    name: "TheaAndSid",
    idea: "Proposal Solutions",
    type: "Services",
    website: "https://theaandsid.com/",
    head_office_address: "Mumbai",
    founded_on: 2021.0,
    deal_amount: 80.0,
    deal_equity: 7.0,
    valuation: 1143.0,
    profit: 75.0,
    revenue: 16.0,
    patents: null,
  },
  {
    name: "ElcareIndia",
    idea: "Carenting for Elders",
    type: "Medical/Health",
    website: "https://elcare.co/",
    head_office_address: "Mumbai",
    founded_on: 2021.0,
    deal_amount: 100.0,
    deal_equity: 2.5,
    valuation: 4000.0,
    profit: 30.0,
    revenue: 60.0,
    patents: null,
  },
  {
    name: "FrenchCrown",
    idea: "Clothes",
    type: "Beauty/Fashion",
    website: "https://frenchcrown.in/",
    head_office_address: "Surat",
    founded_on: 2017.0,
    deal_amount: 150.0,
    deal_equity: 0.33,
    valuation: 45455.0,
    profit: 70.0,
    revenue: 7200.0,
    patents: null,
  },
  {
    name: "VeryMuchIndian",
    idea: "Paithani Handloom Sarees",
    type: "Beauty/Fashion",
    website: "https://www.verymuchindian.com/",
    head_office_address: "Pune",
    founded_on: 2018.0,
    deal_amount: 50.0,
    deal_equity: 3.0,
    valuation: 1667.0,
    profit: 35.0,
    revenue: 150.0,
    patents: null,
  },
  {
    name: "Dabble",
    idea: "Paints Crayons Brushes",
    type: "Manufacturing",
    website: "https://dabbleplayart.com/",
    head_office_address: "Bangalore",
    founded_on: null,
    deal_amount: 50.0,
    deal_equity: 10.0,
    valuation: 500.0,
    profit: 75.0,
    revenue: 33.0,
    patents: null,
  },
  {
    name: "HoneyVeda",
    idea: "Honey in natural nutritious form",
    type: "Food",
    website: "https://www.honeyveda.in/",
    head_office_address: "Ahmedabad",
    founded_on: null,
    deal_amount: 75.0,
    deal_equity: 7.5,
    valuation: 1000.0,
    profit: 20.0,
    revenue: 53.0,
    patents: null,
  },
  {
    name: "SwadeshiBlessings",
    idea: "Clay utensils and cookwares",
    type: "Furnishing/Household",
    website: "https://www.swadeshiblessings.in/",
    head_office_address: "Udaipur",
    founded_on: 2020.0,
    deal_amount: 50.0,
    deal_equity: 5.0,
    valuation: 1000.0,
    profit: 60.0,
    revenue: 120.0,
    patents: null,
  },
  {
    name: "LeafyAffair",
    idea: "Botanical Jewellery",
    type: "Beauty/Fashion",
    website: "https://leafyaffair.com/",
    head_office_address: "Bangalore",
    founded_on: null,
    deal_amount: 50.0,
    deal_equity: 2.5,
    valuation: 2000.0,
    profit: 80.0,
    revenue: 110.0,
    patents: null,
  },
  {
    name: "ScrapUncle",
    idea: "Sell scrap recyclables online",
    type: "Services",
    website: "https://scrapuncle.com/",
    head_office_address: "Delhi",
    founded_on: 2020.0,
    deal_amount: 60.0,
    deal_equity: 3.0,
    valuation: 2000.0,
    profit: 25.0,
    revenue: 600.0,
    patents: null,
  },
  {
    name: "Manetain",
    idea: "Curly Hair Care Products",
    type: "Beauty/Fashion",
    website: "https://manetain.in/",
    head_office_address: "Cochin,Mumbai",
    founded_on: null,
    deal_amount: 75.0,
    deal_equity: 2.5,
    valuation: 3000.0,
    profit: 60.0,
    revenue: 100.0,
    patents: null,
  },
  {
    name: "GavinParis",
    idea: "Gender-Neutral Fashion",
    type: "Beauty/Fashion",
    website: "https://www.gavinparis.com/",
    head_office_address: "Kolkata",
    founded_on: 2022.0,
    deal_amount: 50.0,
    deal_equity: 5.0,
    valuation: 1000.0,
    profit: 60.0,
    revenue: 114.0,
    patents: null,
  },
  {
    name: "UnStop",
    idea: "Connecting talent colleges recruiters",
    type: "Technology/Software",
    website: "https://unstop.com/",
    head_office_address: "Delhi",
    founded_on: 2022.0,
    deal_amount: 100.0,
    deal_equity: 1.0,
    valuation: 10000.0,
    profit: 90.0,
    revenue: 1600.0,
    patents: null,
  },
  {
    name: "Flhexible",
    idea: "Composite paper honeycomb panels",
    type: "Furnishing/Household",
    website: "https://www.flhexible.com/",
    head_office_address: "Jaipur",
    founded_on: 2019.0,
    deal_amount: 50.0,
    deal_equity: 7.5,
    valuation: 666.6666667,
    profit: 40.0,
    revenue: 16.0,
    patents: null,
  },
  {
    name: "DesiToys",
    idea: "Indian Traditional Toys and Indoor Games",
    type: "Manufacturing",
    website: "https://www.desitoys.in/",
    head_office_address: "Mumbai",
    founded_on: 2017.0,
    deal_amount: 50.0,
    deal_equity: 3.0,
    valuation: 1666.666667,
    profit: 50.0,
    revenue: 115.0,
    patents: null,
  },
  {
    name: "Tipayi",
    idea: "Balance Bike for Kids",
    type: "Manufacturing",
    website: "https://www.vamshycle.com/",
    head_office_address: "Pune",
    founded_on: 2019.0,
    deal_amount: 50.0,
    deal_equity: 10.0,
    valuation: 500.0,
    profit: 35.0,
    revenue: 21.0,
    patents: [
        "patent1",
    ],
  },
  {
    name: "MidNightAngelsByPC",
    idea: "Lounge & Travel wear",
    type: "Beauty/Fashion",
    website: "https://midnightangelsbypc.com/",
    head_office_address: "Gurgaon",
    founded_on: 2017.0,
    deal_amount: 75.0,
    deal_equity: 6.0,
    valuation: 1250.0,
    profit: 83.0,
    revenue: 180.0,
    patents: null,
  },
  {
    name: "Malaki",
    idea: "Non-Alcoholic Beverages",
    type: "Liquor/Beverages",
    website: "https://malaki.in/",
    head_office_address: "Mumbai",
    founded_on: null,
    deal_amount: 50.0,
    deal_equity: 1.0,
    valuation: 5000.0,
    profit: 56.0,
    revenue: 270.0,
    patents: null,
  },
  {
    name: "CraveRajaFoods",
    idea: "Cloud-kitchen service",
    type: "Food",
    website: "https://craverajafoods.com/",
    head_office_address: "Kolkata",
    founded_on: 2020.0,
    deal_amount: 65.0,
    deal_equity: 3.0,
    valuation: 2166.666667,
    profit: 70.0,
    revenue: 256.0,
    patents: null,
  },
  {
    name: "DrCubes",
    idea: "Frozen Fresh cubes",
    type: "Liquor/Beverages",
    website: "https://drcubes.in/",
    head_office_address: "Bangalore",
    founded_on: 2017.0,
    deal_amount: 80.0,
    deal_equity: 15.0,
    valuation: 533.3333333,
    profit: 45.0,
    revenue: 75.0,
    patents: null,
  },
  {
    name: "Conker",
    idea: "Skill Based Learning Online Courses",
    type: "Technology/Software",
    website: "https://learn.conkerworld.com/",
    head_office_address: "Bangalore",
    founded_on: null,
    deal_amount: 40.0,
    deal_equity: 1.0,
    valuation: 4000.0,
    profit: 50.0,
    revenue: 120.0,
    patents: null,
  },
  {
    name: "oyehappy",
    idea: "Unique Gifts, Customized Gifts, Romantic Gifts, Thoughtful Gifts",
    type: "Services",
    website: "https://www.oyehappy.com/",
    head_office_address: "Hyderabad",
    founded_on: null,
    deal_amount: 50.0,
    deal_equity: 1.0,
    valuation: 5000.0,
    profit: 80.0,
    revenue: 1005.0,
    patents: null,
  },
  {
    name: "WaggyZone",
    idea: "Ice Cream Treat for Dogs, Puppies and Cats",
    type: "Animal/Pets",
    website: "https://waggyzone.com/",
    head_office_address: "Mumbai",
    founded_on: null,
    deal_amount: 50.0,
    deal_equity: 5.0,
    valuation: 1000.0,
    profit: 60.0,
    revenue: 0.0,
    patents: null,
  },
  {
    name: "AdilQadri",
    idea: "Perfumes and Attar",
    type: "Beauty/Fashion",
    website: "https://www.adilqadri.com/",
    head_office_address: "Bilimora",
    founded_on: 2020.0,
    deal_amount: 100.0,
    deal_equity: 0.5,
    valuation: 20000.0,
    profit: 70.0,
    revenue: 2070.0,
    patents: null,
  },
  {
    name: "Blix",
    idea: "Robotics toys",
    type: "Technology/Software",
    website: "https://blix.in/",
    head_office_address: "Mumbai",
    founded_on: 2021.0,
    deal_amount: 80.0,
    deal_equity: 2.0,
    valuation: 4000.0,
    profit: 50.0,
    revenue: 400.0,
    patents: null,
  },
  {
    name: "Bartisans",
    idea: "Cocktail Mocktail mixers",
    type: "Liquor/Beverages",
    website: "https://www.bartisans.in/",
    head_office_address: "Mumbai",
    founded_on: 2021.0,
    deal_amount: 100.0,
    deal_equity: 2.5,
    valuation: 4000.0,
    profit: 70.0,
    revenue: 143.0,
    patents: null,
  },
  {
    name: "Aretto",
    idea: "Expandable Shoes For Kids",
    type: "Manufacturing",
    website: "https://wearetto.com/",
    head_office_address: "Pune",
    founded_on: 2020.0,
    deal_amount: 80.0,
    deal_equity: 1.0,
    valuation: 8000.0,
    profit: 57.0,
    revenue: 700.0,
    patents:[
        "patent1",
    ],
  },
  {
    name: "Zorko",
    idea: "Quick service restaurant",
    type: "Food",
    website: "https://zorko.in/",
    head_office_address: "Surat",
    founded_on: 2021.0,
    deal_amount: 150.0,
    deal_equity: 1.0,
    valuation: 15000.0,
    profit: 40.0,
    revenue: 3000.0,
    patents: null,
  },
  {
    name: "EvaScalp",
    idea: "Post Chemo Scalp Cooling brand",
    type: "Medical/Health",
    website: "https://evascalpcooling.co.in/",
    head_office_address: "Mumbai",
    founded_on: 2020.0,
    deal_amount: 30.0,
    deal_equity: 1.2,
    valuation: 2500.0,
    profit: 85.0,
    revenue: 59.0,
    patents: [
        "patent1",
    ],
  },
  {
    name: "Elitty",
    idea: "Teenage Make-up Brand",
    type: "Beauty/Fashion",
    website: "https://elittybeauty.com/",
    head_office_address: "Gurgaon",
    founded_on: null,
    deal_amount: 100.0,
    deal_equity: 4.0,
    valuation: 2500.0,
    profit: 36.0,
    revenue: 113.0,
    patents: null,
  },
  {
    name: "DecodeAge",
    idea: "Age Longetivity Supplements",
    type: "Medical/Health",
    website: "https://decodeage.com/",
    head_office_address: "Bangalore",
    founded_on: 2021.0,
    deal_amount: 100.0,
    deal_equity: 1.25,
    valuation: 8000.0,
    profit: 70.0,
    revenue: 1100.0,
    patents: null,
  },
  {
    name: "EcoBiotraps",
    idea: "Mosquito Breeding Prevention",
    type: "Animal/Pets",
    website: "https://ecobiotraps.com/",
    head_office_address: "Ahmedabad,Pune",
    founded_on: 2022.0,
    deal_amount: 50.0,
    deal_equity: 2.0,
    valuation: 2500.0,
    profit: 25.0,
    revenue: 84.0,
    patents: [
        "patent1",
    ],
  },
  {
    name: "ToffeeCoffeeRoasters",
    idea: "Coffee brand",
    type: "Liquor/Beverages",
    website: "https://toffeecoffeeroasters.com/",
    head_office_address: "Bangalore",
    founded_on: 2019.0,
    deal_amount: 60.0,
    deal_equity: 2.0,
    valuation: 3000.0,
    profit: 62.0,
    revenue: 230.0,
    patents: null,
  },
  {
    name: "Chefling",
    idea: "DIY Food Products",
    type: "Food",
    website: "https://chefling.in/",
    head_office_address: "Mumbai",
    founded_on: null,
    deal_amount: 40.0,
    deal_equity: 10.0,
    valuation: 400.0,
    profit: 70.0,
    revenue: 20.0,
    patents: null,
  },
  {
    name: "IntenseFocus",
    idea: "Designer Eye Wear Brand",
    type: "Beauty/Fashion",
    website: "https://intensefocus.com/",
    head_office_address: null,
    founded_on: null,
    deal_amount: 500.0,
    deal_equity: 5.0,
    valuation: 10000.0,
    profit: 60.0,
    revenue: 825.0,
    patents: null,
  },
  {
    name: "Refit",
    idea: "Refurbished Phones brand",
    type: "Electronics",
    website: "https://refitglobal.com/",
    head_office_address: "Delhi",
    founded_on: 2017.0,
    deal_amount: 200.0,
    deal_equity: 0.5,
    valuation: 40000.0,
    profit: 14.0,
    revenue: 18700.0,
    patents: null,
  },
  {
    name: "Artinci",
    idea: "Zero Sugar Desserts",
    type: "Food",
    website: "https://www.artinci.com/",
    head_office_address: "Bangalore",
    founded_on: 2017.0,
    deal_amount: 50.0,
    deal_equity: 1.75,
    valuation: 2857.142857,
    profit: 62.0,
    revenue: 440.0,
    patents: [
        "patent1",
    ],
  },
  {
    name: "Cosmix",
    idea: "Herbal Super Supplements",
    type: "Medical/Health",
    website: "https://cosmix.in/",
    head_office_address: null,
    founded_on: 2019.0,
    deal_amount: 100.0,
    deal_equity: 1.0,
    valuation: 10000.0,
    profit: 70.0,
    revenue: 750.0,
    patents: null,
  },
];