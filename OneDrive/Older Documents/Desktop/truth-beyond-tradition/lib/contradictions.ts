export interface Contradiction {
  id: number;
  slug: string;
  title: string;
  number: number;
  image: string;
  content: string;
}

export const contradictions: Contradiction[] = [
  {
    id: 1,
    slug: "jehoiachin-age",
    title: "King Jehoiachin's Age",
    number: 2,
    image: "/books/bible-contradictions/c002-jehoiachin-age.jpg",
    content: `According to 2 Chronicles 36:9, he was **8 years old**. But in 2 Kings 24:8, it says he was **18 years old**. That's a *huge difference*—ten years is no small error when you're talking about whether a child or a young adult was ruling a kingdom. This contradiction has minor theological significance but raises real concerns for people who view Scripture as inerrant down to every word and number. Critics argue that this discrepancy reveals how historical books may have been copied or edited over time with occasional numerical mistakes. Defenders of the Bible often try to "explain it away" by suggesting the Chronicler's version (8 years old) is a copyist's error—the Hebrew characters for 8 (שׁמֹנֶה) and 18 (שְׁמֹנֶה־עֶשְׂרֵה) are very similar and may have been misread by a scribe. Others argue that Jehoiachin may have been made co-regent at 8 and became full king at 18, although there's no strong textual support for that theory. Either way, it paints a picture of fragile bible texts where seemingly simple details don't align.`,
  },
  {
    id: 2,
    slug: "jesus-lineage",
    title: "Jesus' Lineage",
    number: 3,
    image: "/books/bible-contradictions/c003-jesus-david-lineage.jpg",
    content: `This contradiction appears in the genealogies of Jesus found in the Gospels of Matthew and Luke. **Amazingly, most churchgoers are unaware this one even exists!** Matthew 1:6 traces Jesus' lineage through Solomon, the royal son of David, which fits a narrative of kingship. But Luke 3:31 traces it instead through Nathan, another son of David who never ruled as king. Both can't be biologically correct if taken literally — so which is it? Theologically, this matters because Messianic prophecy was thought to require descent from David, often interpreted to mean through the royal line. Some try to reconcile the two by saying Matthew gives Joseph's LEGAL line, while Luke gives Mary's biological line (with Heli as Mary's father and Joseph's father-in-law), despite the lack of evidece for this. Others propose the genealogies are symbolic, not historical. But there's no indication in either gospel that the genealogy is metaphorical — both present them as straightforward history. So, unless one adopts a fancy workaround, this is a sticky one. Unfortunately, it gets worse in the next contradiction.`,
  },
  {
    id: 3,
    slug: "royal-disqualification",
    title: "Royal Disqualification",
    number: 4,
    image: "/books/bible-contradictions/c004-royal-disqualification.jpg",
    content: `**The issue of Jesus' royal line deepens into another thorny issue:** Can Jesus inherit David's throne if one of his ancestors was cursed by Yahweh to never have a descendant sit on it?

In Luke 1:32, the angel Gabriel declares that Jesus will be given **"the throne of his father David"**, fulfilling a major Messianic prophecy.

But there's a snag.

According to Matthew 1:11 and 1 Chronicles 3:16, Jesus is descended (through Joseph's line) from **Jehoiakim**, a king whom Yahweh curses in Jeremiah 36:30, saying that **none of his descendants will sit on David's throne**.

**That seems to be a direct block to Jesus' claim**—if he's biologically tied to Jehoiakim, the curse would disqualify him from the throne.

Some apologists try to resolve this by saying Jesus wasn't Joseph's biological son (thus avoiding the curse—Mary was conceived by the Holy Spirit, remember?), or that Luke's genealogy represents Mary's line, which bypasses Jehoiakim entirely.

*But both solutions are speculative and not explicitly stated in the text.*

Also, both lines pass through Joseph anyway, so the legal argument remains **thin at best**.

If we take the genealogies and prophecies at face value, **this becomes a genuine theological headache**.

**Incidentally, the same curse was pronounced on Jehoiakim's son, Jehoiachin (also known as Jeconiah or Coniah) in Jeremiah 22:30.** *So a double-curse if you like.*`,
  },
  {
    id: 4,
    slug: "father-of-joseph",
    title: "Joseph's Father",
    number: 5,
    image: "/books/bible-contradictions/c005-father-of-joseph.jpg",
    content: `This previous contradiction flows into the next one, which was already implied (and even stated): **Who was Joseph's father?** According to Matthew 1:16, it was **Jacob**, but Luke 3:23 says it was **Heli**. Obviously, Joseph couldn't have had two biological fathers, so something doesn't add up. This matters more than it first seems because these genealogies are often used to validate Jesus' *Messianic credentials*—tracing him legally or biologically back to King David.

To explain the discrepancy, some propose that Matthew traces the legal line (as stated previously perhaps via adoption or inheritance laws), while Luke gives the biological line, possibly through Mary (making Heli her father, and Joseph his son-in-law). But the text in Luke doesn't say anything about Mary—it *clearly says Joseph was the son of Heli*. Others suggest that one genealogy uses levirate marriage logic, where a man legally becomes the child of his mother's second husband if the first died without issue. These workarounds exist—but they rely on **speculation rather than textual clarity**. For readers who expect clean historical records, this starts to get awkward.`,
  },
  {
    id: 5,
    slug: "father-of-shelah",
    title: "Shelah's Father",
    number: 6,
    image: "/books/bible-contradictions/c006-father-of-shelah.jpg",
    content: `This one's easy to miss but highlights how even seemingly minor names can trigger big questions. In Genesis 10:24 and Genesis 11:12, Shelah is the son of **Arphaxad**. But in Luke 3:35-36, Luke inserts an extra generation: Shelah is the son of **Cainan**, who is the son of Arphaxad. This causes a problem not only for biblical consistency but also for how genealogies were preserved and transmitted.

It's not just a typo - the name Cainan appears *nowhere in the Hebrew Old Testament manuscripts* but does appear in some versions of the Septuagint, the Greek Old Testament. Some argue Luke was simply quoting from that Greek source, while others say Cainan may have been added to Luke's genealogy by later copyists. Theologically, this isn't earth-shattering - it doesn't affect doctrine - but it does chip away at the idea that genealogical records in the Bible are **infallible or immune from scribal insertions**.`,
  },
  {
    id: 6,
    slug: "absalom",
    title: "Absalom",
    number: 7,
    image: "/books/bible-contradictions/c007-absalom.jpg",
    content: `This contradiction shows up in the genealogical listings of King David's sons. In 2 Samuel 3:3, Absalom is listed as David's **third son**, born to Maacah, the daughter of Talmai, king of Geshur. But over in 1 Chronicles 3:2, Absalom is listed as the **fourth son**, with the same mother. So which is it - third or fourth?

This isn't just a clerical detail; it matters because biblical genealogies were seen as signs of divine order, royal succession, and legitimacy. If Absalom was the third son, his eventual rebellion and claim to the throne carries different implications than if he was the fourth. Those trying to smooth this over often argue that one of the earlier sons might have died young or been excluded for some reason, which shifted the ranking by the time Chronicles was compiled. Others suggest that the chronicler may have inserted an extra name, or that the writer of Samuel simply omitted someone. Either way, it reflects the *occasional messiness in biblical record-keeping* - especially when multiple sources were later merged to produce the canon we have today.`,
  },
  {
    id: 7,
    slug: "demoniacs",
    title: "How Many Demoniacs?",
    number: 8,
    image: "/books/bible-contradictions/c008-demoniacs.jpg",
    content: `Matthew 8:28 says there were **two demon-possessed men** that Jesus healed in the region of the Gadarenes, while both Mark 5:2 and Luke 8:27 only mention **one**.

**So, was it one man or two?**

It might seem like a small detail, but it raises a **bigger question** about how the Gospel writers remembered or chose to tell the same event differently.

Theologically, it doesn't shake the core of Christian belief—Jesus still heals and shows power over evil—but it **does matter for people who view the Bible as inerrant** and expect every detail to align.

Those trying to resolve the contradiction usually say Mark and Luke just focused on the more vocal or dramatic demoniac, the "main character," while Matthew includes both.

But skeptics ask: *if every word is divinely inspired, why leave one guy out—or add an extra one in?*

It's one of those moments where you have to ask whether the Gospel writers were **reporters, editors, or storytellers with specific emphases**.`,
  },
  {
    id: 8,
    slug: "famine",
    title: "Famine Years",
    number: 9,
    image: "/books/bible-contradictions/c009-famine.jpg",
    content: `This contradiction is about a punishment option God gave King David after he conducted a census against divine instruction.

In 2 Samuel 24:13, the prophet Gad tells David he can choose **"seven years of famine"** as one of the possible consequences.

But in the parallel account, 1 Chronicles 21:12, the same choice is listed as only **"three years of famine."**

**So which was it—seven or three?**

This isn't just a typo; it affects how we view the **severity of divine judgment** and the **consistency of biblical records**.

Theologically, it raises questions about the **reliability of the text** in recounting divine actions.

To explain it away, some scholars argue that a copyist error might have crept into the text of Samuel—especially since three years is consistent with other famine durations in Scripture (like the one in Elijah's time).

Others suggest the chronicler "corrected" the number to better align with common prophetic symbolism.

*Still, for those who believe in the inerrancy of Scripture, this difference needs smoothing over—while others see it as a glimpse into how sacred texts were edited over time.*`,
  },
  {
    id: 9,
    slug: "flight-to-egypt",
    title: "Flight to Egypt",
    number: 10,
    image: "/books/bible-contradictions/c010-flight-to-egypt.jpg",
    content: `**This contradiction shows up when you compare how Matthew and Luke describe what happened right after Jesus was born.**

In Matthew 2:13-16, Joseph is warned in a dream to **flee to Egypt** because Herod wants to kill the child. So the family takes off and stays there until Herod dies.

But Luke 2:21-39 tells a completely different story: after Jesus is born, the family goes to Jerusalem to perform temple purification rites, then returns peacefully to Nazareth—**no Egypt, no warning, no massacre**.

**Theologically, this contradiction can be pretty significant.** The flight to Egypt is often cited as a fulfillment of prophecy, which is what Matthew specifically states quoting Hosea 11:1:

"Out of Egypt I called my son."

In context, Hosea is referring to Israel being brought out of Egypt during the Exodus—not a future Messiah. *It's a historical reference, not a predictive prophecy.*

However, Matthew reinterprets it typologically, presenting Jesus as a new Israel or a new Moses, re-living Israel's journey. This approach—using typology rather than strict prediction—is common in Matthew's Gospel and is part of a broader strategy to show Jesus as the fulfillment of Hebrew scripture, sometimes in ways that **reframe the original meaning**.

Luke's version emphasizes **Jewish law and ritual purity**.

Trying to explain it away, some suggest the family first went to Jerusalem, then fled to Egypt, and later returned to Nazareth—but Luke's account implies a **smooth, uninterrupted return from the temple**.

*The two stories don't just differ—they follow completely incompatible timelines*, suggesting either a major omission in one Gospel or an **irreconcilable narrative tension** between them.`,
  },
];

export function getContradictionBySlug(slug: string): Contradiction | undefined {
  return contradictions.find((c) => c.slug === slug);
}

