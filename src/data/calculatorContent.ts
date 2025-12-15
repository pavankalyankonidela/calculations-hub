export interface CalculatorContentData {
  howToUse: string[];
  about: string;
  history: string;
  formula: string;
  faqs: { question: string; answer: string }[];
  funFacts: string[];
}

export const calculatorContent: Record<string, CalculatorContentData> = {
  age: {
    howToUse: [
      "Enter your date of birth using the date picker or by typing in the format YYYY-MM-DD.",
      "Optionally, toggle 'Calculate age at specific date' to find your age at any point in time.",
      "Click the 'Calculate Age' button to see your results.",
      "View your exact age broken down into years, months, weeks, days, hours, and seconds.",
      "Use the 'Clear' button to reset and start a new calculation."
    ],
    about: "An age calculator is a digital tool designed to compute the exact difference between two dates, typically your birth date and the current date (or a specified target date). Unlike simple year subtraction, our calculator accounts for the precise number of months, weeks, days, hours, and even seconds you've lived. This makes it invaluable for determining exact ages for legal documents, medical records, insurance policies, and milestone celebrations. The calculator handles all the complexity of varying month lengths, leap years, and time zone considerations to give you the most accurate result possible.",
    history: "The concept of tracking age dates back to ancient civilizations. The Egyptians were among the first to develop a 365-day calendar around 3000 BCE. The Julian calendar, introduced by Julius Caesar in 45 BCE, established the concept of leap years but miscalculated the solar year by about 11 minutes annually. This error accumulated over centuries until Pope Gregory XIII introduced the Gregorian calendar in 1582, which we still use today. The Gregorian reform skipped 10 days and refined the leap year rule: years divisible by 100 aren't leap years unless also divisible by 400. This is why 1900 wasn't a leap year, but 2000 was. Different cultures have different traditions for counting age—in some East Asian countries, babies are considered one year old at birth, a practice called 'counting age.'",
    formula: "Age calculation uses date arithmetic based on the Gregorian calendar. The formula compares two dates and calculates the difference in each unit: Years = Full calendar years between dates. Months = Remaining full months after years. Days = Remaining days after months. For total calculations: Total Days = (End Date - Start Date) in milliseconds ÷ 86,400,000. Total Weeks = Total Days ÷ 7. Total Hours = Total Days × 24. Total Seconds = Total Days × 86,400. Leap years (366 days) occur when the year is divisible by 4, except for century years, which must be divisible by 400.",
    faqs: [
      {
        question: "How accurate is this age calculator?",
        answer: "Our calculator is accurate to the second. It uses the precise difference between dates and accounts for leap years, varying month lengths, and all calendar irregularities established by the Gregorian calendar system."
      },
      {
        question: "Does the calculator account for leap years?",
        answer: "Yes, absolutely. The calculator correctly handles leap years (years divisible by 4, except century years not divisible by 400). February 29th is properly accounted for in all calculations."
      },
      {
        question: "Why might my age seem different from a simple year calculation?",
        answer: "Simple year subtraction doesn't account for whether you've had your birthday yet this year. Our calculator considers the exact month and day, giving you your precise current age."
      },
      {
        question: "Can I calculate age for future dates?",
        answer: "Yes! Use the 'Calculate age at specific date' toggle to set any future date and see what your age will be at that time."
      },
      {
        question: "What time zone does the calculator use?",
        answer: "The calculator uses your browser's local time zone for all calculations, ensuring accuracy based on your location."
      }
    ],
    funFacts: [
      "The average human lifespan is approximately 27,375 days or about 2.4 billion seconds.",
      "Japan has the highest life expectancy in the world, with citizens living an average of 84.3 years.",
      "A person born on February 29 (leap day) technically only celebrates their 'actual' birthday every four years.",
      "The oldest verified person ever was Jeanne Calment of France, who lived 122 years and 164 days.",
      "Your heart beats approximately 100,000 times per day, meaning a 70-year-old's heart has beaten over 2.5 billion times."
    ]
  },
  bmi: {
    howToUse: [
      "Select your preferred unit system: Metric (kg/cm) or Imperial (lbs/inches).",
      "Enter your weight in the appropriate field.",
      "Enter your height in the appropriate field.",
      "Click 'Calculate BMI' to see your Body Mass Index result.",
      "View your BMI value, category, and where you fall on the visual BMI scale."
    ],
    about: "Body Mass Index (BMI) is a numerical value derived from a person's weight and height. It serves as a screening tool to categorize individuals into weight categories: underweight, normal weight, overweight, and obese. While BMI doesn't directly measure body fat, it correlates with more direct measures of body fat and is widely used in clinical settings due to its simplicity and low cost. Healthcare providers use BMI as an initial assessment to identify potential weight-related health risks, though it should be considered alongside other factors like muscle mass, bone density, age, and overall health.",
    history: "BMI was invented by Belgian mathematician Adolphe Quetelet between 1830 and 1850. Originally called the 'Quetelet Index,' it was developed as part of his work on 'social physics' to characterize the average man. The term 'Body Mass Index' was coined by American physiologist Ancel Keys in a 1972 paper. Keys found that BMI, despite its simplicity, was as effective as more complex measures for population studies. The World Health Organization (WHO) adopted BMI as the international standard for obesity statistics in the 1980s. The current BMI categories (underweight, normal, overweight, obese) were established by the NIH in 1998, lowering the overweight threshold from 27.8 to 25, instantly 'classifying' millions more Americans as overweight.",
    formula: "BMI is calculated using a simple formula: BMI = weight (kg) / height² (m²). For imperial units: BMI = (weight in pounds × 703) / height² (inches²). The result is interpreted as follows: Below 18.5 = Underweight, 18.5–24.9 = Normal weight, 25.0–29.9 = Overweight, 30.0 and above = Obese. The formula works because it normalizes weight for height, allowing comparison across different body sizes. However, it doesn't distinguish between muscle and fat, which is why athletes with high muscle mass may have elevated BMI despite low body fat.",
    faqs: [
      {
        question: "Is BMI accurate for everyone?",
        answer: "BMI is a useful screening tool but has limitations. It may overestimate body fat in athletes and muscular individuals, and underestimate it in older persons or those who have lost muscle mass. It should be one of several factors considered in health assessment."
      },
      {
        question: "What is a healthy BMI range?",
        answer: "A BMI between 18.5 and 24.9 is generally considered healthy. However, optimal BMI can vary based on age, gender, ethnicity, and individual health factors. Consult a healthcare provider for personalized guidance."
      },
      {
        question: "Why doesn't BMI account for muscle mass?",
        answer: "BMI was designed for population-level studies, not individual diagnosis. It uses only height and weight because these are easy to measure. More precise body composition analysis requires specialized equipment like DEXA scans."
      },
      {
        question: "Do BMI categories differ by ethnicity?",
        answer: "Yes, research shows that health risks associated with BMI vary by ethnicity. For example, Asian populations may have higher health risks at lower BMI levels, leading some health organizations to use adjusted thresholds."
      },
      {
        question: "How often should I check my BMI?",
        answer: "Monthly or quarterly checks are sufficient for most people. More frequent measurements aren't necessary as significant BMI changes require substantial weight changes over time."
      }
    ],
    funFacts: [
      "The BMI formula has remained unchanged since Adolphe Quetelet invented it nearly 200 years ago.",
      "About 39% of adults worldwide are overweight according to WHO BMI standards.",
      "Elite athletes like LeBron James and Dwayne 'The Rock' Johnson are technically 'overweight' or 'obese' by BMI despite having low body fat.",
      "The average BMI in the United States increased from 25 in the 1960s to over 29 today.",
      "BMI categories were adjusted in 1998, making 29 million Americans 'overweight' overnight without gaining a pound."
    ]
  },
  basic: {
    howToUse: [
      "Click the number buttons (0-9) to input numbers.",
      "Use the operation buttons (+, -, ×, ÷) to select your desired operation.",
      "Press the equals (=) button to calculate the result.",
      "Use 'C' to clear all entries or the backspace button to delete the last digit.",
      "Use ± to toggle between positive and negative numbers, and % to convert to percentage."
    ],
    about: "A basic calculator performs fundamental arithmetic operations: addition, subtraction, multiplication, and division. Despite the proliferation of advanced computing devices, basic calculators remain essential tools in education, commerce, and daily life. They provide quick, reliable answers for everyday mathematical needs without the complexity of scientific or graphing calculators. Our digital calculator emulates the familiar interface of physical calculators while adding the convenience of browser-based access from any device.",
    history: "The history of calculators spans millennia. The abacus, invented around 2700 BCE in Mesopotamia, was humanity's first calculating tool and remained in wide use for over 4,000 years. In 1642, French mathematician Blaise Pascal invented the Pascaline, the first mechanical calculator capable of addition and subtraction. Gottfried Wilhelm Leibniz improved upon this design in 1694 with a machine that could multiply and divide. The first electronic calculator, ANITA (A New Inspiration To Arithmetic), was released in 1961 by Bell Punch Company. Texas Instruments revolutionized the industry in 1967 with the handheld calculator, and by the 1970s, pocket calculators became affordable consumer products. Today's smartphone calculators are millions of times more powerful than the room-sized computers of the 1960s.",
    formula: "Basic arithmetic follows the standard order of operations (PEMDAS/BODMAS): Parentheses/Brackets first, then Exponents/Orders, followed by Multiplication and Division (left to right), and finally Addition and Subtraction (left to right). Addition: a + b combines two quantities. Subtraction: a - b finds the difference. Multiplication: a × b is repeated addition. Division: a ÷ b splits a quantity into equal parts. Percentage: n% = n/100. These operations form the foundation of all mathematical computation.",
    faqs: [
      {
        question: "Why does the calculator show '0' at startup?",
        answer: "Zero is the neutral starting point for calculations. It represents an empty or cleared state, ready for your first input. This convention dates back to early electronic calculators."
      },
      {
        question: "What's the difference between C and backspace?",
        answer: "'C' (Clear) resets the entire calculator to its starting state, erasing all entered numbers and operations. The backspace button only removes the last digit entered, preserving the rest of your calculation."
      },
      {
        question: "How does the percentage button work?",
        answer: "The percentage button divides the current number by 100. For example, pressing 50 then % gives 0.5. This is useful for calculating percentages in subsequent operations."
      },
      {
        question: "Why can't I divide by zero?",
        answer: "Division by zero is mathematically undefined. If you divide any number by progressively smaller numbers approaching zero, the result approaches infinity—but infinity isn't a number. Hence, division by zero has no valid answer."
      },
      {
        question: "What's the maximum number this calculator can handle?",
        answer: "This calculator uses JavaScript's number system, which can accurately represent integers up to 9,007,199,254,740,991 (about 9 quadrillion). Beyond this, precision may be lost."
      }
    ],
    funFacts: [
      "The first pocket calculator, the HP-35 (1972), cost $395—equivalent to about $2,800 today.",
      "The word 'calculate' comes from the Latin 'calculus,' meaning 'small stone'—referring to pebbles used on ancient counting boards.",
      "Japan's National Abacus Education Research Association still certifies abacus masters who can calculate faster than electronic calculators.",
      "The equals sign (=) was invented by Welsh mathematician Robert Recorde in 1557.",
      "Early electronic calculators consumed so much power that some models needed to be plugged into wall outlets."
    ]
  },
  percentage: {
    howToUse: [
      "Select your calculation type: 'X% of Y', 'X is what % of Y', or 'Percentage Change'.",
      "Enter the required values in the input fields provided.",
      "Click 'Calculate' to see your result instantly.",
      "Use the 'Clear' button to reset all fields and start a new calculation.",
      "Review the result displayed prominently below the calculator."
    ],
    about: "A percentage calculator simplifies one of the most common mathematical operations in daily life. Percentages are used everywhere: shopping discounts, tax calculations, tip computations, grade evaluations, financial growth rates, and statistical data analysis. Our calculator handles three essential percentage calculations: finding a percentage of a number (useful for discounts and tips), determining what percentage one number is of another (useful for grades and proportions), and calculating percentage change between two values (useful for growth rates and price changes).",
    history: "The concept of percentages emerged from ancient commerce. Roman taxes were calculated in fractions of 1/100, called 'centesima rerum venalium' (hundredth of the value of things sold). The word 'percent' evolved from the Italian 'per cento' (per hundred). The percent sign (%) developed from a shorthand abbreviation of 'per cento,' which was written as 'p cento,' then 'pc°,' and eventually morphed into the % symbol by the 1800s. The widespread use of percentages in statistics and science grew during the 18th and 19th centuries with the development of probability theory. Today, percentages are ubiquitous in finance, science, education, and commerce worldwide.",
    formula: "Three main percentage formulas: 1) Percentage of a number: (Percentage ÷ 100) × Number. Example: 20% of 150 = (20 ÷ 100) × 150 = 30. 2) What percentage is X of Y: (X ÷ Y) × 100. Example: 30 is what % of 150? = (30 ÷ 150) × 100 = 20%. 3) Percentage change: ((New - Old) ÷ |Old|) × 100. Example: Change from 100 to 125 = ((125 - 100) ÷ 100) × 100 = 25% increase. Positive results indicate increase; negative results indicate decrease.",
    faqs: [
      {
        question: "What's the difference between percentage and percentile?",
        answer: "A percentage represents a part of 100, while a percentile indicates a ranking position. For example, scoring in the 90th percentile means you performed better than 90% of test-takers, not that you got 90% correct."
      },
      {
        question: "Can percentages be greater than 100%?",
        answer: "Yes! Percentages over 100% indicate amounts greater than the reference value. For example, if sales doubled from last year, that's a 100% increase, meaning current sales are 200% of last year's."
      },
      {
        question: "How do I calculate a reverse percentage?",
        answer: "To find the original number before a percentage was applied, divide the final amount by (1 + percentage/100) for increases, or (1 - percentage/100) for decreases. Example: If $120 is 20% more than the original, divide 120 by 1.20 to get $100."
      },
      {
        question: "Why does percentage change use absolute value?",
        answer: "We use the absolute value of the original number to ensure consistent calculation regardless of whether we're dealing with positive or negative starting values. This prevents confusion with negative percentage changes."
      },
      {
        question: "How do I convert a fraction to a percentage?",
        answer: "Divide the numerator by the denominator, then multiply by 100. For example, 3/4 = 3 ÷ 4 = 0.75 × 100 = 75%."
      }
    ],
    funFacts: [
      "The average person encounters percentages over 50 times per day in advertisements, news, and daily transactions.",
      "A 50% increase followed by a 50% decrease doesn't return to the original—it leaves you at 75% of where you started.",
      "The percent sign (%) is called a 'glyph' and is one of the most recognized mathematical symbols worldwide.",
      "Retailers often use 'psychological pricing' with percentages—'33% more free' sounds better than 'now 133% of original size.'",
      "In statistics, the term 'percent' and 'percentage point' have different meanings, a distinction often confused in media reporting."
    ]
  },
  loan: {
    howToUse: [
      "Enter the total loan amount (principal) you wish to borrow.",
      "Input the annual interest rate as a percentage.",
      "Specify the loan tenure (duration) in months.",
      "Click 'Calculate EMI' to see your monthly payment amount.",
      "Review the breakdown showing total interest and total payment over the loan term."
    ],
    about: "An EMI (Equated Monthly Installment) calculator helps you understand the true cost of borrowing before committing to a loan. Whether you're financing a home, car, education, or personal expenses, knowing your monthly payment is essential for budgeting. Our calculator computes your fixed monthly payment, total interest paid over the loan term, and the complete amount you'll repay. This transparency helps you compare loan offers from different lenders and choose terms that fit your financial situation.",
    history: "The concept of lending with interest dates back to ancient Mesopotamia around 2000 BCE, where temples served as the first banks. The Code of Hammurabi (1754 BCE) established maximum interest rates—33.33% for grain loans and 20% for silver. Modern amortized loans developed in 17th-century Europe with the rise of banking institutions. The mathematical formula for calculating fixed monthly payments (EMI) emerged from actuarial science in the 18th and 19th centuries. The Equal Credit Opportunity Act of 1974 and Truth in Lending Act in the US standardized how lenders must disclose interest rates and total costs, making calculators like this essential tools for informed borrowing.",
    formula: "EMI is calculated using the formula: EMI = P × r × (1 + r)^n / ((1 + r)^n - 1), where: P = Principal loan amount, r = Monthly interest rate (annual rate ÷ 12 ÷ 100), n = Number of monthly installments (tenure). Total Interest = (EMI × n) - P. Total Payment = EMI × n. This formula ensures each payment covers both interest and principal, with the interest portion decreasing and principal portion increasing over time (amortization).",
    faqs: [
      {
        question: "What does EMI stand for?",
        answer: "EMI stands for Equated Monthly Installment. It's a fixed payment amount made by a borrower to a lender on a specified date each month. EMIs consist of both principal and interest components."
      },
      {
        question: "How does tenure affect EMI?",
        answer: "Longer tenure means lower monthly EMIs but higher total interest paid. Shorter tenure means higher monthly EMIs but less total interest. Choose based on your monthly budget and total cost preference."
      },
      {
        question: "Is the interest rate I enter annual or monthly?",
        answer: "Enter the annual interest rate. Our calculator automatically converts it to monthly for the EMI calculation. Most lenders quote rates annually, so this is the standard practice."
      },
      {
        question: "What's the difference between fixed and floating rate loans?",
        answer: "Fixed-rate loans maintain the same interest rate throughout the tenure, making EMIs predictable. Floating-rate loans can change based on market conditions, potentially lowering or raising your EMI over time."
      },
      {
        question: "Can I prepay my loan to reduce interest?",
        answer: "Yes, prepayment reduces your principal balance, which reduces total interest. Some lenders charge prepayment penalties, so check your loan terms. Even partial prepayments can significantly reduce your total interest burden."
      }
    ],
    funFacts: [
      "The first 30-year fixed-rate mortgage was introduced in the US in 1948 by the FHA, revolutionizing home ownership.",
      "On a typical 30-year mortgage, you'll pay more in interest than the original loan amount borrowed.",
      "The word 'mortgage' comes from Old French, literally meaning 'death pledge'—the pledge dies when the debt is paid.",
      "Making one extra mortgage payment per year can shorten a 30-year loan by approximately 4-5 years.",
      "The lowest mortgage rates in US history occurred in 2020-2021, with 30-year fixed rates dropping below 2.7%."
    ]
  },
  tip: {
    howToUse: [
      "Enter the total bill amount before tip.",
      "Select a preset tip percentage or enter a custom tip amount.",
      "Specify the number of people to split the bill (minimum 1).",
      "View the calculated tip amount, total bill, and per-person share instantly.",
      "Adjust any value to recalculate automatically."
    ],
    about: "A tip calculator takes the guesswork out of gratuity calculations, especially when splitting bills with friends. Tipping customs vary worldwide, but in the United States, tipping is an essential part of service industry compensation. Our calculator helps you quickly determine appropriate tips for restaurants, bars, hair salons, taxis, and other service providers. It also simplifies group dining by calculating each person's fair share, including their portion of the tip.",
    history: "Tipping originated in Tudor England in the 16th century, where guests in private homes would give money to the host's servants. The practice moved to commercial establishments, and by the 18th century, tipping was common in coffeehouses and inns. American travelers brought the custom back from Europe in the mid-1800s. The word 'tip' allegedly comes from 'To Insure Promptness,' though this etymology is disputed. In the early 20th century, anti-tipping movements emerged in the US, with six states passing anti-tipping laws (all later repealed). Today, tipping norms vary dramatically by country—expected in the US, often included in the bill in Europe, and sometimes considered insulting in Japan.",
    formula: "Tip calculation is straightforward: Tip Amount = Bill Amount × (Tip Percentage ÷ 100). Total Amount = Bill Amount + Tip Amount. Per Person = Total Amount ÷ Number of People. Common tip percentages: 15% (standard service), 18% (good service), 20%+ (excellent service). For easy mental math: 10% = move decimal one place left; 20% = double the 10%; 15% = add half of 10% to 10%.",
    faqs: [
      {
        question: "What is the standard tip percentage?",
        answer: "In the US, 15-20% is standard for restaurant service. 15% for adequate service, 18% for good service, and 20%+ for excellent service. Some suggest the baseline has shifted to 18-20% in recent years."
      },
      {
        question: "Should I tip on the pre-tax or post-tax amount?",
        answer: "Etiquette experts generally agree that tipping on the pre-tax amount is acceptable. However, tipping on the total (post-tax) is more generous and simpler to calculate. Either is appropriate."
      },
      {
        question: "How much should I tip for takeout?",
        answer: "Tipping for takeout is optional but increasingly common—typically 10-15%. During the pandemic, higher takeout tips became a way to support struggling restaurants, and this practice has continued."
      },
      {
        question: "Do I need to tip if service was included?",
        answer: "If 'service charge' or 'gratuity' is already added to your bill (common for large groups), additional tipping isn't required but is appreciated for exceptional service. Always check your bill."
      },
      {
        question: "How do I calculate tip quickly without a calculator?",
        answer: "Find 10% by moving the decimal point one place left. Double it for 20%. For 15%, find 10%, halve it for 5%, then add them together. Example: $67 bill → $6.70 (10%) + $3.35 (5%) = $10.05 (15%)."
      }
    ],
    funFacts: [
      "Americans tip over $66 billion annually in restaurants alone.",
      "The average American tips 18% at restaurants, though this varies significantly by age and region.",
      "In Japan, tipping can be considered rude—it implies the server isn't earning a fair wage.",
      "The original meaning of 'tip' as gratuity may have come from thieves' slang meaning 'to give' or 'to share.'",
      "Restaurant servers in the US can legally be paid as little as $2.13/hour, with tips expected to make up the difference to minimum wage."
    ]
  },
  discount: {
    howToUse: [
      "Enter the original price of the item.",
      "Enter the discount percentage or select from preset options.",
      "View the calculated discount amount and final price instantly.",
      "Compare different discount percentages using the preset buttons.",
      "Use the reset button to clear all fields and start over."
    ],
    about: "A discount calculator helps shoppers make informed purchasing decisions by revealing the actual savings and final price after a discount. Whether you're shopping during sales events, comparing prices across stores, or evaluating bulk discount offers, knowing the exact numbers prevents overspending. Our calculator instantly shows you how much you'll save and what you'll actually pay, making it easier to determine if a 'deal' is really worth it.",
    history: "Discounting as a retail strategy has ancient origins—merchants have always offered price reductions to move inventory. However, modern discounting practices emerged with the rise of department stores in the mid-1800s. John Wanamaker, often called the father of modern advertising, pioneered fixed-price retailing and seasonal sales in Philadelphia in 1876. The concept of manufacturer's suggested retail price (MSRP) and 'discount from MSRP' developed in the early 20th century with branded consumer goods. Black Friday as a major discount shopping day emerged in the 1960s, while Cyber Monday was coined in 2005. Today, dynamic pricing and personalized discounts use algorithms to optimize pricing in real-time.",
    formula: "Discount calculations use simple percentage math: Discount Amount = Original Price × (Discount Percentage ÷ 100). Final Price = Original Price - Discount Amount. Alternative formula: Final Price = Original Price × (1 - Discount Percentage ÷ 100). For example, 25% off $80: Discount = $80 × 0.25 = $20; Final Price = $80 - $20 = $60. For stacked discounts (e.g., 20% then 10%), apply sequentially: $100 → $80 → $72 (not 30% off).",
    faqs: [
      {
        question: "How do I calculate the original price from a discounted price?",
        answer: "Divide the sale price by (1 - discount percentage/100). For example, if an item is $60 after a 25% discount: $60 ÷ 0.75 = $80 original price."
      },
      {
        question: "Do multiple discounts add up?",
        answer: "No, consecutive discounts don't simply add together. A 20% discount followed by a 10% discount equals about 28% total discount, not 30%. Each discount applies to the already-reduced price."
      },
      {
        question: "What's the difference between 'percent off' and 'percent of'?",
        answer: "'25% off' means you save 25% and pay 75%. '25% of' means you pay only 25% and save 75%. A '25% off' sale gives you 75% of the original price; a '25% of original price' sale gives you 25%."
      },
      {
        question: "Is a larger percentage discount always a better deal?",
        answer: "Not necessarily. A 50% discount on an inflated price might cost more than a 20% discount on a fair price. Always compare the final dollar amount to similar products."
      },
      {
        question: "How do BOGO (Buy One Get One) deals convert to percentage discounts?",
        answer: "BOGO Free = 50% off when buying two items. BOGO 50% off = 25% off when buying two items. The discount applies when you buy the required quantity."
      }
    ],
    funFacts: [
      "Studies show that seeing a 'sale' sign can trigger dopamine release in the brain, regardless of actual savings.",
      "The most common discount percentages (10%, 25%, 50%) are chosen because they're easy to calculate mentally.",
      "Black Friday got its name because it historically pushed retailers 'into the black' (profitability) for the year.",
      "Amazon changes prices on items an average of every 10 minutes using dynamic pricing algorithms.",
      "Research shows consumers often prefer '25% off' to '$25 off $100' even when they're mathematically identical—percentages feel more substantial."
    ]
  },
  unit: {
    howToUse: [
      "Select the conversion category: Length, Weight, or Temperature.",
      "Choose the unit you're converting from in the 'From' dropdown.",
      "Enter the value you want to convert.",
      "Select the unit you're converting to in the 'To' dropdown.",
      "View the converted result instantly—it updates automatically as you type."
    ],
    about: "A unit converter is an essential tool for anyone working with measurements across different systems. With over 200 countries using the metric system and a few (US, Liberia, Myanmar) primarily using imperial, unit conversion is a daily necessity in global commerce, science, cooking, and travel. Our converter handles the most common conversions for length, weight, and temperature, providing accurate results instantly. Whether you're following a European recipe, interpreting scientific data, or shipping packages internationally, accurate conversion is crucial.",
    history: "Measurement systems have evolved over thousands of years. Ancient civilizations based units on body parts—the cubit (forearm length), foot, and inch (thumb width). This led to inconsistency between regions. The metric system was created during the French Revolution in 1795, designed to be universal and based on natural phenomena. The meter was originally defined as one ten-millionth of the distance from the equator to the North Pole. The imperial system evolved from English units codified in the British Weights and Measures Act of 1824. The International System of Units (SI) was established in 1960, standardizing metric measurements worldwide. Temperature scales have their own history: Fahrenheit (1724) based on brine freezing point, Celsius (1742) based on water's properties, and Kelvin (1848) based on absolute zero.",
    formula: "Conversion uses multiplication factors or formulas: Length: 1 inch = 2.54 cm; 1 foot = 0.3048 m; 1 mile = 1.60934 km. Weight: 1 pound = 0.453592 kg; 1 ounce = 28.3495 g. Temperature: °C to °F: (°C × 9/5) + 32; °F to °C: (°F - 32) × 5/9; °C to K: °C + 273.15; K to °C: K - 273.15. The conversion formula is: Target = Source × (Target unit factor ÷ Source unit factor).",
    faqs: [
      {
        question: "Why does the US use a different measurement system?",
        answer: "The US was using English units when the metric system was developed. While the US government has encouraged metric adoption since 1866 and officially supported it since 1975, cultural inertia and the cost of conversion have prevented widespread change."
      },
      {
        question: "What's the difference between mass and weight?",
        answer: "Mass (measured in kilograms) is the amount of matter in an object and stays constant. Weight is the force of gravity on that mass and varies by location. On Earth's surface, they're practically equivalent for everyday purposes."
      },
      {
        question: "Why do scientists use Kelvin instead of Celsius?",
        answer: "Kelvin starts at absolute zero (the coldest possible temperature) and has no negative values. This makes it ideal for scientific calculations where ratios and equations are involved. Zero Kelvin = -273.15°C."
      },
      {
        question: "How accurate are these conversions?",
        answer: "Our conversions use standard conversion factors with high precision. For everyday purposes, they're more than accurate enough. For scientific applications requiring extreme precision, additional significant figures may be needed."
      },
      {
        question: "Why are there 12 inches in a foot?",
        answer: "Twelve was historically favored because it's easily divisible by 2, 3, 4, and 6—making mental calculations easier before calculators existed. This is also why we have 12 hours on clock faces and 12 months in a year."
      }
    ],
    funFacts: [
      "NASA lost a $125 million Mars orbiter in 1999 because one team used metric units and another used imperial.",
      "The kilogram was the last SI unit defined by a physical artifact—a platinum-iridium cylinder in Paris. It was redefined in 2019 using fundamental physics constants.",
      "The metric system was nearly adopted in the US in 1866 when Congress made it legal for trade, but it never became mandatory.",
      "At -40°, Fahrenheit and Celsius are exactly equal: -40°F = -40°C.",
      "The speed of light is exactly 299,792,458 meters per second—this is now the definition of the meter, not the other way around."
    ]
  }
};
