export type BlogVariant = "moving" | "dumpster";

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string; author?: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  publishedAt: string;
  body: BlogBlock[];
};

const movingPosts: BlogPost[] = [
  {
    slug: "fill-moving-calendar-without-brokers",
    title: "How to Fill Your Moving Calendar Without Relying on Brokers",
    excerpt:
      "Brokers eat your margins and decide which jobs you get. Here is how moving companies are replacing them with a predictable, exclusive lead pipeline that books trucks every week.",
    category: "Lead Generation",
    readingTime: "7 min read",
    publishedAt: "April 22, 2026",
    body: [
      {
        type: "p",
        text: "Most moving company owners we talk to are stuck in the same loop. The phone rings, but the job on the other end was already shopped to four other movers, the price has been beaten into the ground, and whoever answers fastest wins. That is the broker game, and it was not built to make you profitable.",
      },
      {
        type: "p",
        text: "There is a better path, but it requires you to stop thinking like a contractor waiting for work and start thinking like an operator building a pipeline. The good news is that moving is one of the easiest local services to generate exclusive demand for, because the buyer intent is huge and the buying window is short.",
      },
      {
        type: "h2",
        text: "Why Brokers Win Today and Why That is About to Change",
      },
      {
        type: "p",
        text: "Brokers win for one reason: they spend more on advertising than you do, and they spend it more consistently. They are not better at sales, they do not have a magical list, and they certainly do not care about your reputation. They simply show up first when a homeowner Googles a move.",
      },
      {
        type: "p",
        text: "When you build your own pipeline, you reverse that dynamic. You become the company the homeowner finds first, the only one they speak with, and the one they remember when their neighbor needs a mover six months later.",
      },
      {
        type: "quote",
        text: "Every dollar you give a broker is a dollar you trained your competitor to outbid you with next month.",
      },
      {
        type: "h2",
        text: "The Three Layers of an Exclusive Lead Pipeline",
      },
      {
        type: "h3",
        text: "1. A landing page that does one job",
      },
      {
        type: "p",
        text: "Forget the corporate website with ten tabs. The page that converts is short, fast, and asks for one thing: a quote request with name, phone, move date, and origin to destination. Anything else is friction. The mistake most movers make is treating the website like a brochure instead of a salesperson.",
      },
      {
        type: "h3",
        text: "2. Paid traffic that targets buyers, not browsers",
      },
      {
        type: "p",
        text: "The companies winning right now run tightly geo-targeted ads on Google for high-intent keywords like long distance movers near me and full service moving company. They bid on action, not awareness. A homeowner three weeks from a closing date is a buyer; somebody reading a packing tips article is not.",
      },
      {
        type: "h3",
        text: "3. A booking flow that does not lose the lead",
      },
      {
        type: "p",
        text: "If a lead has to wait twenty four hours for a callback, you have already lost. The shops that close at thirty percent or higher answer in under five minutes, give a real ballpark on the first call, and lock the date with a small deposit before they hang up. Speed is the single biggest predictor of closing rate in this industry.",
      },
      {
        type: "h2",
        text: "What to Stop Doing This Week",
      },
      {
        type: "p",
        text: "Stop accepting broker leads as your primary source. Cap them at twenty percent of your revenue and treat the rest as overflow. Stop letting customer service answer sales calls. Put your best closer on the phone, even if it costs more per hour, because the difference between a forty percent close rate and a fifteen percent close rate pays the salary ten times over.",
      },
      {
        type: "p",
        text: "Stop optimizing your truck routes before you optimize your lead flow. A perfect operation with no jobs is a slow way to go out of business; a messy operation with a full calendar buys you time to fix everything else.",
      },
      {
        type: "h2",
        text: "What a Healthy Lead Mix Looks Like",
      },
      {
        type: "p",
        text: "A moving company with a healthy pipeline books between forty and seventy percent of its work from owned channels: paid search, organic referrals, repeat customers, and a small amount of partnerships with realtors or storage facilities. Brokers, if used at all, are reserved for filling gaps in slow weeks and never become the foundation of the calendar.",
      },
      {
        type: "p",
        text: "Hitting that mix takes ninety days of disciplined execution and a willingness to spend money on advertising before the results show up. The companies that survive the next two years will be the ones that own their demand, not the ones that rent it from a marketplace.",
      },
    ],
  },
  {
    slug: "lead-gen-mistakes-killing-moving-companies",
    title: "The 5 Lead Gen Mistakes That Quietly Kill Moving Companies",
    excerpt:
      "Most moving companies do not lose deals to better competitors. They lose them to small, invisible mistakes in the way leads are captured, contacted, and closed. Here are the five worst offenders.",
    category: "Sales",
    readingTime: "6 min read",
    publishedAt: "April 15, 2026",
    body: [
      {
        type: "p",
        text: "Owners love to blame the market. The economy is soft, customers are cheap, the competition is dumping prices. Some of that is true on a given week, but when we audit a moving company that is missing its number, the real problem is almost always operational. The leads are coming in. They are just dying inside the company.",
      },
      {
        type: "h2",
        text: "Mistake One: Treating Form Fills as Strong Leads",
      },
      {
        type: "p",
        text: "A web form is a weak signal. It tells you somebody might be moving, not that they are ready to book. Companies that treat every form fill like a hot lead burn out their sales team and ignore the calls and texts that actually convert. Score your leads. A phone call from a real number with a known move date is worth ten form fills.",
      },
      {
        type: "h2",
        text: "Mistake Two: Slow Response Time",
      },
      {
        type: "p",
        text: "If you take more than five minutes to respond to a quote request, you are competing against three other movers who already called. The data on this is not new and it is not subtle: response time is the single largest correlated factor with close rate in local services. Solve this with software, not with hope.",
      },
      {
        type: "quote",
        text: "Your close rate is not a sales problem. It is a clock problem.",
      },
      {
        type: "h2",
        text: "Mistake Three: Quoting on the First Call",
      },
      {
        type: "p",
        text: "Giving a flat number on the first call without an inventory or a virtual walkthrough either underprices the job, which kills your margin, or overprices it, which kills the close. The right move is to quote a range, schedule a virtual estimate, and lock the date with a deposit. The estimate is not a free service. It is your sales process.",
      },
      {
        type: "h2",
        text: "Mistake Four: No Follow Up After the Quote",
      },
      {
        type: "p",
        text: "Most movers send the quote and wait. The customer is shopping three companies and will pick whichever one feels most professional and most present. A simple three touch follow up sequence over forty eight hours, by phone, email, and text, will lift your close rate by ten to twenty points without spending another dollar on advertising.",
      },
      {
        type: "h2",
        text: "Mistake Five: Ignoring the Post Move Window",
      },
      {
        type: "p",
        text: "The week after a successful move is the highest leverage moment in the entire customer relationship. That is when a happy customer will give you a Google review, a referral, and permission to use their move in your marketing. Almost no mover asks. The ones that do build a flywheel that never stops.",
      },
      {
        type: "p",
        text: "None of this is glamorous. It is operational discipline applied consistently for ninety days. Fix the five mistakes above and your close rate will move from somewhere in the teens to somewhere in the thirties, which roughly doubles the revenue from the same advertising spend.",
      },
    ],
  },
  {
    slug: "moving-leads-convert-below-10-percent",
    title: "Why Most Moving Leads Convert Below 10 Percent and How to Fix It",
    excerpt:
      "A ten percent close rate is not a sales talent problem. It is a system problem. Here is what high performing moving companies do differently from the first ring to the signed contract.",
    category: "Operations",
    readingTime: "8 min read",
    publishedAt: "April 8, 2026",
    body: [
      {
        type: "p",
        text: "When we first run an audit on a moving company, the close rate is almost always somewhere between eight and twelve percent. The owner usually believes the leads are bad. The leads are not bad. The system around them is bad, and the same exact leads handed to a disciplined operation will close at three or four times that rate.",
      },
      {
        type: "h2",
        text: "What a Ten Percent Close Rate Actually Costs You",
      },
      {
        type: "p",
        text: "If you are spending five thousand dollars a month on ads and closing ten percent at an average ticket of two thousand dollars, you are doing fine. If you can get that same spend to convert at twenty five percent, you have just turned a fine month into a phenomenal one without buying a single extra lead. That is why fixing close rate is the single highest leverage activity an owner can focus on.",
      },
      {
        type: "h2",
        text: "The Five Stages Where Leads Die",
      },
      {
        type: "h3",
        text: "Stage 1: The First Ring",
      },
      {
        type: "p",
        text: "If a sales call goes to voicemail, you have already lost between forty and sixty percent of your potential close. Staff the phones during business hours, and have an after hours answering service that can at least book a callback inside an hour.",
      },
      {
        type: "h3",
        text: "Stage 2: The Discovery Call",
      },
      {
        type: "p",
        text: "Most movers ask three questions: where, when, and how big. That is order taking, not selling. A real discovery call asks why the customer is moving, what they are worried about, and what would make this experience better than the last one. People do not buy moves. They buy the absence of stress.",
      },
      {
        type: "h3",
        text: "Stage 3: The Estimate",
      },
      {
        type: "p",
        text: "An accurate estimate is the second biggest factor in close rate after speed of response. Virtual walkthroughs over video are now standard, take twenty minutes, and let you quote a binding number that is competitive on price and credible on accuracy. Customers will pay slightly more for a quote they trust over a low number they suspect.",
      },
      {
        type: "h3",
        text: "Stage 4: The Decision Window",
      },
      {
        type: "p",
        text: "After the estimate, the customer enters a decision window of one to seven days. During that window, you should be present without being annoying. One follow up the same day, one the next morning, and one the day before they need to decide is the rhythm that works.",
      },
      {
        type: "quote",
        text: "Customers do not pick the cheapest mover. They pick the mover who feels most certain that the day will go smoothly.",
      },
      {
        type: "h3",
        text: "Stage 5: The Deposit",
      },
      {
        type: "p",
        text: "If you do not take a deposit, the booking is not real. A small deposit, even one hundred dollars, removes the customer from the market and triples your show rate on move day. Make it easy to pay and easy to refund and you will close more deals than the company across town that demands a thousand dollars upfront.",
      },
      {
        type: "h2",
        text: "Build the Scoreboard Before You Build the Team",
      },
      {
        type: "p",
        text: "You cannot fix what you do not measure. Track contact rate, quote rate, close rate, and average ticket every week. Most owners discover within thirty days that one or two specific stages are leaking, and a focused fix at that stage moves the entire business. The companies that grow without burning out are not working harder, they are working on the right number.",
      },
    ],
  },
];

const dumpsterPosts: BlogPost[] = [
  {
    slug: "book-50-dumpster-rentals-per-week",
    title: "How to Book 50+ Dumpster Rentals Per Week Without Burning Out on Ads",
    excerpt:
      "Booking fifty rentals a week is not about spending more on ads. It is about building a system where every dollar of ad spend produces a callable, exclusive lead inside an hour.",
    category: "Lead Generation",
    readingTime: "7 min read",
    publishedAt: "April 24, 2026",
    body: [
      {
        type: "p",
        text: "Most dumpster rental companies running ads have the same complaint. The clicks are getting more expensive every quarter, the leads do not pick up the phone, and the brokers in the area are bidding on the company name to siphon traffic. None of that is going away. What is changing is which operators are figuring out how to win inside that environment.",
      },
      {
        type: "h2",
        text: "Why Spending More is the Wrong First Move",
      },
      {
        type: "p",
        text: "When you double your ad spend without changing anything else, you usually double your bad leads, not your good ones. The auctions are full of contractors who will pay forty dollars a click for a job they will never close. Outbidding them is a losing game. Outbuilding them is not.",
      },
      {
        type: "h2",
        text: "The Three Pillars of a Fifty Rentals a Week Operation",
      },
      {
        type: "h3",
        text: "Pillar one: own your phone tree",
      },
      {
        type: "p",
        text: "If your phone tree makes a customer press three to reach a human, you are losing one in three calls before they say a word. The shops booking heavy volume have a single dedicated number that rings a real person within two rings during business hours. Everything else is a leak.",
      },
      {
        type: "h3",
        text: "Pillar two: quote and book on the same call",
      },
      {
        type: "p",
        text: "Customers calling for a dumpster are not researching. They have demolition starting Monday and need a ten yard in their driveway by Friday. The operators who quote the price, hold the date, and process the deposit on that first call book three times the volume of the operators who promise a callback.",
      },
      {
        type: "h3",
        text: "Pillar three: kill the dead inventory",
      },
      {
        type: "p",
        text: "Most fleets carry too many sizes and not enough of the two that actually move. Look at your booking data and you will usually find that fifteen and twenty yarders make up seventy percent of the demand. Right size the fleet, focus the marketing on what you have in stock, and your delivery costs drop while your utilization climbs.",
      },
      {
        type: "quote",
        text: "Booking volume is not a marketing problem. It is the residue of an operation that does not waste a single phone call.",
      },
      {
        type: "h2",
        text: "What Fifty a Week Actually Looks Like",
      },
      {
        type: "p",
        text: "Fifty rentals a week is roughly two hundred a month. To hit that with a healthy mix you need around three hundred to four hundred qualified inbound leads, which means about a thousand clicks at a typical close rate, which means an ad budget that scales with the city you are in. The number is real, but it only works when the back office can absorb the volume without losing bookings.",
      },
      {
        type: "p",
        text: "Build the operation first, then turn the ads up. Every operator who tries to do it the other way ends up burned out, broke, or both.",
      },
    ],
  },
  {
    slug: "pricing-dumpster-rentals-profitable-20-yard",
    title: "Pricing Dumpster Rentals: The Math Behind a Profitable 20 Yard",
    excerpt:
      "If your twenty yard is priced at the broker average, you are losing money on every drop. Here is the real cost stack and the price you actually need to charge to keep the lights on.",
    category: "Pricing",
    readingTime: "6 min read",
    publishedAt: "April 17, 2026",
    body: [
      {
        type: "p",
        text: "There is a price point that owners hear from brokers and assume is the market rate. It almost never is. The brokers are quoting their cost to acquire the lead, not the cost to actually run the rental. When you build the math from the ground up, the price that keeps you profitable is usually thirty to forty percent above what you have been quoting.",
      },
      {
        type: "h2",
        text: "The Real Cost Stack of a 20 Yard",
      },
      {
        type: "p",
        text: "A typical twenty yard rental costs you a delivery, a pickup, a tip fee, a percentage of overhead, a driver hour, fuel, and the amortized cost of the can itself. Add up your numbers honestly and the floor on a profitable twenty yard in most markets sits between four hundred and fifty and five hundred and fifty dollars before you even count marketing.",
      },
      {
        type: "h2",
        text: "Why Owners Underprice",
      },
      {
        type: "h3",
        text: "Reason 1: They benchmark against the wrong competitors",
      },
      {
        type: "p",
        text: "If you price against the broker who is reselling capacity from a regional hauler, you will always be undercut. That broker has no trucks to maintain, no drivers to pay, and no insurance to renew. Their cost stack is not your cost stack.",
      },
      {
        type: "h3",
        text: "Reason 2: They quote nervously",
      },
      {
        type: "p",
        text: "When the customer pauses on the phone, most owners drop the price by fifty dollars to save the deal. Do that on twenty bookings a week and you have given away a full time wage. Hold the price, explain the value, and let the cheap customers go to the operator who will not be in business next year.",
      },
      {
        type: "quote",
        text: "Every discount you give to win a job is a tax you pay to the customers who would have booked at the real price.",
      },
      {
        type: "h2",
        text: "How to Reset Your Pricing Without Killing Demand",
      },
      {
        type: "p",
        text: "Raise prices in increments of twenty five dollars at a time, every four weeks, and watch the close rate. If volume holds, raise again. Most operators we work with discover their close rate barely moves until they are eighty to a hundred dollars above where they started, which is a massive expansion in margin without losing a single customer.",
      },
      {
        type: "p",
        text: "The companies that survive the next downturn will be the ones with healthy margins. The companies that chase volume at the broker price will be the ones the auctioneers liquidate.",
      },
    ],
  },
  {
    slug: "broker-leads-killing-dumpster-margins",
    title: "Why Broker Leads Are Killing Your Dumpster Business Margins",
    excerpt:
      "Broker leads feel free until you measure what they actually cost. Here is how to read your own numbers and decide whether to cut them off completely or keep them as overflow.",
    category: "Strategy",
    readingTime: "6 min read",
    publishedAt: "April 10, 2026",
    body: [
      {
        type: "p",
        text: "Brokers are not evil. They are just expensive in ways that do not show up on a single invoice. A typical broker lead costs you a referral fee, a discount on the price, a higher cancellation rate, and a customer who will never call you directly again. Add it up and the true cost is often double the headline number.",
      },
      {
        type: "h2",
        text: "The Hidden Costs Owners Miss",
      },
      {
        type: "h3",
        text: "Hidden cost 1: the price ceiling",
      },
      {
        type: "p",
        text: "Brokers cap your pricing at whatever rate the marketplace shows the customer. You cannot quote your real number, you have to honor the broker number. That alone costs the average operator fifty to seventy five dollars per drop.",
      },
      {
        type: "h3",
        text: "Hidden cost 2: the relationship",
      },
      {
        type: "p",
        text: "When the broker delivers the lead, the customer thinks they hired the broker, not you. They will call the broker for the next job. You are paying to lease customers you should be acquiring once and keeping forever.",
      },
      {
        type: "h3",
        text: "Hidden cost 3: the team confusion",
      },
      {
        type: "p",
        text: "Operations teams that handle a mix of broker and direct customers usually end up giving broker level service to direct customers and direct level pricing to broker customers, which is the worst of both worlds. The shops that win pick a model and run it cleanly.",
      },
      {
        type: "quote",
        text: "If brokers were the answer, the biggest dumpster companies in the country would be brokers. They are not.",
      },
      {
        type: "h2",
        text: "When Brokers Actually Make Sense",
      },
      {
        type: "p",
        text: "There is a real role for broker leads, and it is small. Use them to fill specific delivery routes that would otherwise run empty, to test new service areas before you commit ad budget, and to keep drivers utilized in the slowest weeks of the year. That is it. Anything more and you are subsidizing somebody else's business with your trucks.",
      },
      {
        type: "p",
        text: "Cap broker volume at fifteen percent of your bookings, build a direct lead engine for the other eighty five percent, and within two quarters your margins will look like a different business.",
      },
    ],
  },
  {
    slug: "google-ads-clicks-no-rentals",
    title:
      "Why Your Google Ads Generate Clicks But Your Dumpster Isn't Being Rented",
    excerpt:
      "The problem almost never is the ad. Here's where the money is actually being lost.",
    category: "Google Ads",
    readingTime: "7 min read",
    publishedAt: "April 30, 2026",
    body: [
      {
        type: "p",
        text: "You're spending money on Google Ads. The clicks are coming in. The dashboard looks busy.",
      },
      {
        type: "p",
        text: "But your phone isn't ringing the way it should be. And when it does ring, half the people don't book.",
      },
      {
        type: "p",
        text: "If that sounds familiar, you're not alone. This is the most common problem we see with dumpster rental companies that come to us after months of disappointing results from their ads.",
      },
      {
        type: "p",
        text: "The frustrating part? The problem almost never is the ad itself.",
      },
      {
        type: "h2",
        text: "The click is not the customer",
      },
      {
        type: "p",
        text: "There's a mental trap that most business owners fall into when they start running Google Ads: they measure success by clicks.",
      },
      {
        type: "p",
        text: "Clicks feel like progress. More clicks, more impressions, lower cost-per-click — these numbers go up, the dashboard turns green, and it feels like things are working.",
      },
      {
        type: "p",
        text: "But a click is just a person who was curious enough to leave Google. It tells you almost nothing about whether that person is going to rent a dumpster from you.",
      },
      {
        type: "p",
        text: "What happens after the click is where the money is made or lost. And in most dumpster rental campaigns, the post-click experience is where everything falls apart.",
      },
      {
        type: "h2",
        text: "The 4 reasons clicks don't turn into rentals",
      },
      {
        type: "h3",
        text: "1. Your landing page answers the wrong question",
      },
      {
        type: "p",
        text: "When someone searches \"dumpster rental near me\" and clicks your ad, they have one question in their head: \"Can these people solve my problem today?\"",
      },
      {
        type: "p",
        text: "Most dumpster rental websites answer a different question instead. They talk about the company history. They list every service they offer. They have a generic contact form that says \"we'll get back to you within 24 hours.\"",
      },
      {
        type: "p",
        text: "That's not what a person who needs a dumpster delivered by Thursday wants to see.",
      },
      {
        type: "p",
        text: "The page that follows your ad needs to answer three things immediately, without scrolling: what sizes do you have available, how fast can you deliver, and what's the price?",
      },
      {
        type: "p",
        text: "If those answers aren't visible in the first five seconds, most people leave. They go back to Google and call your competitor.",
      },
      {
        type: "h3",
        text: "2. You're paying for the wrong keywords",
      },
      {
        type: "p",
        text: "Not all dumpster searches are equal.",
      },
      {
        type: "p",
        text: "Someone searching \"what is a roll-off dumpster\" is a researcher. They're early in the process, not ready to book, and you're paying for their curiosity.",
      },
      {
        type: "p",
        text: "Someone searching \"20 yard dumpster rental Kansas City same day\" is a buyer. They know what they want, they know where they are, and they're ready to make a decision right now.",
      },
      {
        type: "p",
        text: "Most campaigns we audit are spending 40 to 60 percent of their budget on informational keywords — people who were never going to book that day. That's not a small problem. That's the difference between a campaign that loses money and one that generates a 3x to 4x return.",
      },
      {
        type: "h3",
        text: "3. Your response time is costing you more than your ad spend",
      },
      {
        type: "p",
        text: "This one is hard to hear, but it's the truth: the biggest reason dumpster rental leads don't convert has nothing to do with your ads.",
      },
      {
        type: "p",
        text: "It has to do with how fast you call back.",
      },
      {
        type: "p",
        text: "A person who needs a dumpster is not doing research for weeks. They have a project starting. They need a solution now. When they fill out your form or call your number, they're also doing the same thing with two or three other companies at the same time.",
      },
      {
        type: "quote",
        text: "A lead contacted within 5 minutes is nine times more likely to convert than one contacted after 30 minutes.",
      },
      {
        type: "p",
        text: "That means if you're calling back leads an hour later — or worse, the next morning — you're not losing to better ads. You're losing to whoever picked up the phone first.",
      },
      {
        type: "p",
        text: "One of our clients went from a 22% close rate to a 37% close rate in a single month. The only thing that changed was response time. The ads were identical.",
      },
      {
        type: "h3",
        text: "4. The ad and the landing page are talking about different things",
      },
      {
        type: "p",
        text: "Google rewards relevance. When someone searches \"30 yard dumpster rental,\" clicks your ad that says \"30 yard dumpsters available,\" and lands on a page that talks about your full-service junk removal company — Google notices that disconnect. So does the customer.",
      },
      {
        type: "p",
        text: "Every ad should lead to a page that mirrors exactly what the ad promised. If you're running ads for specific dumpster sizes, each size should have its own landing page. If you're targeting a specific city, the page should mention that city.",
      },
      {
        type: "p",
        text: "When everything matches — the search term, the ad, and the landing page — conversion rates go up significantly, and your cost per click goes down because Google gives you a higher quality score.",
      },
      {
        type: "h2",
        text: "What a properly structured campaign actually looks like",
      },
      {
        type: "p",
        text: "For context, here's what we see from campaigns that are running well: cost per booked rental between $30 and $60 depending on the market, conversion rate from lead to booked dumpster of 30% to 37%, and a return on ad spend of 3x to 4x consistently.",
      },
      {
        type: "p",
        text: "Those numbers are achievable. We have clients hitting them month after month in competitive markets like Kansas City, Houston, and Boise.",
      },
      {
        type: "p",
        text: "But they didn't start there. Most of them came to us with campaigns that had $40 to $60 cost-per-click, 15% conversion rates, and no clear picture of what was working.",
      },
      {
        type: "p",
        text: "The gap between those two realities is not a bigger budget. It's a more intelligent structure.",
      },
      {
        type: "h2",
        text: "The questions you should be able to answer about your campaign",
      },
      {
        type: "p",
        text: "If you can't answer these questions about your current Google Ads, you don't have full visibility into your results: What is your cost per booked rental (not cost per click — cost per rental)? Which specific keywords are generating your bookings? What is your average response time to a new lead? Which city or zip code is generating your highest close rate? What happens to leads who fill out your form but don't book?",
      },
      {
        type: "p",
        text: "These are not advanced questions. They're the baseline. If your current setup can't answer all five, there's money being left on the table.",
      },
      {
        type: "h2",
        text: "What to do next",
      },
      {
        type: "p",
        text: "If your Google Ads are generating clicks but not rentals, the problem is fixable. It's almost never the budget. It's almost never the market. It's almost always the structure — the keywords, the landing page, the follow-up process, and the alignment between what the ad promises and what the customer finds when they arrive.",
      },
      {
        type: "p",
        text: "We offer a free 30-minute audit where we look at your current campaign, identify exactly where the drop-off is happening, and show you what a corrected structure would look like. No pitch. No commitment. Just a clear picture of what's working and what isn't.",
      },
    ],
  },
];

export const blogPosts: Record<BlogVariant, BlogPost[]> = {
  moving: movingPosts,
  dumpster: dumpsterPosts,
};

export const getPost = (variant: BlogVariant, slug: string): BlogPost | undefined =>
  blogPosts[variant].find((p) => p.slug === slug);

export const allBlogSlugs = (): { variant: BlogVariant; slug: string }[] => [
  ...movingPosts.map((p) => ({ variant: "moving" as const, slug: p.slug })),
  ...dumpsterPosts.map((p) => ({ variant: "dumpster" as const, slug: p.slug })),
];
