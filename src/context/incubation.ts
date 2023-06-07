import { getIncubationState } from "../store/IncubationStore";
import { IBank, IIncubation } from "./types";

export const banks: IBank[] = [
	{ id: 1, name: "Access Bank", bank_code: "044" },
	{ id: 3, name: "Access Bank (Diamond)", bank_code: "063" },
	{ id: 4, name: "Ecobank Nigeria", bank_code: "050" },
	{ id: 6, name: "Fidelity Bank", bank_code: "070" },
	{ id: 7, name: "First Bank of Nigeria", bank_code: "011" },
	{ id: 9, name: "Guaranty Trust Bank", bank_code: "058" },
	{ id: 11, name: "Keystone Bank", bank_code: "082" },
	{ id: 67, name: "Kuda Bank", bank_code: "50211" },
	{ id: 169, name: "PalmPay", bank_code: "999991" },
	{ id: 14, name: "Stanbic IBTC Bank", bank_code: "221" },
	{ id: 16, name: "Sterling Bank", bank_code: "232" },
	{ id: 17, name: "Union Bank of Nigeria", bank_code: "032" },
	{ id: 18, name: "United Bank For Africa", bank_code: "033" },
	{ id: 19, name: "Unity Bank", bank_code: "215" },
	{ id: 20, name: "Wema Bank", bank_code: "035" },
	{ id: 21, name: "Zenith Bank", bank_code: "057" },
	{ id: 302, name: "9mobile 9Payment Service Bank", bank_code: "120001" },
	{ id: 174, name: "Abbey Mortgage Bank", bank_code: "801" },
	{ id: 188, name: "Above Only MFB", bank_code: "51204" },
	{ id: 300, name: "Airtel Smartcash PSB", bank_code: "120004" },
	{ id: 27, name: "ALAT by WEMA", bank_code: "035A" },
	{ id: 179, name: "Amju Unique MFB", bank_code: "50926" },
	{ id: 614, name: "Aramoko MFB", bank_code: "50083" },
	{ id: 63, name: "ASO Savings and Loans", bank_code: "401" },
	{ id: 297, name: "Astrapolaris MFB LTD", bank_code: "MFB50094" },
	{ id: 181, name: "Bainescredit MFB", bank_code: "51229" },
	{ id: 108, name: "Bowen Microfinance Bank", bank_code: "50931" },
	{ id: 82, name: "Carbon", bank_code: "565" },
	{ id: 74, name: "CEMCS Microfinance Bank", bank_code: "50823" },
	{ id: 284, name: "Chanelle Microfinance Bank Limited", bank_code: "50171" },
	{ id: 2, name: "Citibank Nigeria", bank_code: "023" },
	{ id: 283, name: "Corestep MFB", bank_code: "50204" },
	{ id: 173, name: "Coronation Merchant Bank", bank_code: "559" },
	{ id: 366, name: "Crescent MFB", bank_code: "51297" },
	{ id: 4, name: "Ecobank Nigeria", bank_code: "050" },
	{ id: 64, name: "Ekondo Microfinance Bank", bank_code: "562" },
	{ id: 167, name: "Eyowo", bank_code: "50126" },
	{ id: 6, name: "Fidelity Bank", bank_code: "070" },
	{ id: 177, name: "Firmus MFB", bank_code: "51314" },
	{ id: 7, name: "First Bank of Nigeria", bank_code: "011" },
	{ id: 8, name: "First City Monument Bank", bank_code: "214" },
	{ id: 112, name: "FSDH Merchant Bank Limited", bank_code: "501" },
	{ id: 287, name: "Gateway Mortgage Bank LTD", bank_code: "812" },
	{ id: 70, name: "Globus Bank", bank_code: "00103" },
	{ id: 183, name: "GoMoney", bank_code: "100022" },
	{ id: 9, name: "Guaranty Trust Bank", bank_code: "058" },
	{ id: 111, name: "Hackman Microfinance Bank", bank_code: "51251" },
	{ id: 81, name: "Hasal Microfinance Bank", bank_code: "50383" },
	{ id: 10, name: "Heritage Bank", bank_code: "030" },
	{ id: 301, name: "HopePSB", bank_code: "120002" },
	{ id: 168, name: "Ibile Microfinance Bank", bank_code: "51244" },
	{ id: 615, name: "Ikoyi Osun MFB", bank_code: "50439" },
	{ id: 172, name: "Infinity MFB", bank_code: "50457" },
	{ id: 22, name: "Jaiz Bank", bank_code: "301" },
	{ id: 187, name: "Kadpoly MFB", bank_code: "50502" },
	{ id: 11, name: "Keystone Bank", bank_code: "082" },
	{ id: 184, name: "Kredi Money MFB LTD", bank_code: "50200" },
	{ id: 67, name: "Kuda Bank", bank_code: "50211" },
	{
		id: 109,
		name: "Lagos Building Investment Company Plc.",
		bank_code: "90052",
	},
	{ id: 180, name: "Links MFB", bank_code: "50549" },
	{ id: 296, name: "Living Trust Mortgage Bank", bank_code: "031" },
	{ id: 233, name: "Lotus Bank", bank_code: "303" },
	{ id: 175, name: "Mayfair MFB", bank_code: "50563" },
	{ id: 178, name: "Mint MFB", bank_code: "50304" },
	{ id: 303, name: "MTN Momo PSB", bank_code: "120003" },
	{ id: 185, name: "Paga", bank_code: "100002" },
	{ id: 169, name: "PalmPay", bank_code: "999991" },
	{ id: 26, name: "Parallex Bank", bank_code: "104" },
	{ id: 110, name: "Parkway - ReadyCash", bank_code: "311" },
	{ id: 171, name: "Paycom", bank_code: "999992" },
	{ id: 170, name: "Petra Mircofinance Bank Plc", bank_code: "50746" },
	{ id: 13, name: "Polaris Bank", bank_code: "076" },
	{ id: 626, name: "Polyunwana MFB", bank_code: "50864" },
	{ id: 304, name: "PremiumTrust Bank", bank_code: "105" },
	{ id: 25, name: "Providus Bank", bank_code: "101" },
	{ id: 232, name: "QuickFund MFB", bank_code: "51293" },
	{ id: 176, name: "Rand Merchant Bank", bank_code: "502" },
	{ id: 295, name: "Refuge Mortgage Bank", bank_code: "90067" },
	{ id: 69, name: "Rubies MFB", bank_code: "125" },
	{ id: 286, name: "Safe Haven MFB", bank_code: "51113" },
	{ id: 365, name: "Solid Rock MFB", bank_code: "50800" },
	{ id: 72, name: "Sparkle Microfinance Bank", bank_code: "51310" },
	{ id: 14, name: "Stanbic IBTC Bank", bank_code: "221" },
	{ id: 15, name: "Standard Chartered Bank", bank_code: "068" },
	{ id: 285, name: "Stellas MFB", bank_code: "51253" },
	{ id: 16, name: "Sterling Bank", bank_code: "232" },
	{ id: 23, name: "Suntrust Bank", bank_code: "100" },
	{ id: 68, name: "TAJ Bank", bank_code: "302" },
	{ id: 186, name: "Tangerine Money", bank_code: "51269" },
	{ id: 75, name: "TCF MFB", bank_code: "51211" },
	{ id: 73, name: "Titan Bank", bank_code: "102" },
	{ id: 282, name: "Unical MFB", bank_code: "50871" },
	{ id: 17, name: "Union Bank of Nigeria", bank_code: "032" },
	{ id: 18, name: "United Bank For Africa", bank_code: "033" },
	{ id: 19, name: "Unity Bank", bank_code: "215" },
	{ id: 71, name: "VFD Microfinance Bank Limited", bank_code: "566" },
	{ id: 20, name: "Wema Bank", bank_code: "035" },
	{ id: 21, name: "Zenith Bank", bank_code: "057" },
];

const Incubation: IIncubation[] = JSON.parse(`[
  {
    "date": "SUNDAY 4TH SEPTEMBER, 2022",
    "topic": " WHAT IS YOUR WORK IN THE HOUSE OF GOD?",
    "meditation": {
      "text": "In his grace, God has given us different gifts for doing certain things well. So if God has given you the ability to prophesy, speak out with as much faith as God has given you. If your gift is serving others, serve them well. If you are a teacher, teach well.",
      "reference": " (Romans 12:6-7 NLT)"
    },
    "text": {
      "title": "Today’s Text",
      "reference": " Romans 12:5-10",
      "text": ""
    },
    "body": "Everything God made is for a purpose. If you are not functioning according to the purpose for which you were created, you are useless. What is your work in the house of God? You cannot be a born-again Christian; a member of the body of Christ, and lie dormant, without a particular function in the house of God. God employs every child of His to work for Him, of what use are you in the house of God? Your life goes on record and none of your good works will be forgotten. When you work for God, He pays you; the payment extends from here till eternity. Don’t think of yourself alone, only to remember God when you are in pain. Whatsoever you do for God here on earth will surely follow you. ",
    "prayer": [
      "Ask the Lord to make you function according to the purpose for which you were created."
    ],
    "confession": "Lord, I purge myself today that you shall make me a vessel unto honour, amen.",
    "further_study": [
      {
        "text": "I beseech thee, O LORD, remember now how I have walked before thee in truth and with a perfect heart, and have done that which is good in thy sight. And Hezekiah wept sore.",
        "reference": "2 Kings 20:3:"
      },
      {
        "text": "And Solomon went up thither to the brasen altar before the Lord, which was at the tabernacle of the congregation, and offered a thousand burnt offerings upon it. In that night did God appear unto Solomon, and said unto him, Ask what I shall give thee.",
        "reference": "2 Chronicles 1:6-7:"
      },
      {
        "text": "Now he that planteth and he that watereth are one: and every man shall receive his own reward according to his own labour. For we are labourers together with God: ye are God’s husbandry, ye are God’s building.",
        "reference": "1 Corinthians 3:8-9:"
      },
      {
        "text": "And we sent Timothy to visit you. He is our brother and God’s co-worker in proclaiming the Good News of Christ. We sent him to strengthen you, to encourage you in your faith.",
        "reference": "1 Thessalonians 3:2-3 (NLT):"
      },
      {
        "text": "As every man hath received the gift, even so minister the same one to another, as good stewards of the manifold grace of God.",
        "reference": "1 Peter 4:10:"
      }
    ],
    "footer": " The ’Incubation’ Daily Devotional is a bimonthly  publication  of Living Word Ministries Inc. ",
    "id": 1
  },
  {
    "date": "SATURDAY 27TH NOVEMBER, 2021",
    "topic": " CREATE IN ME A CLEAN HEART",
    "meditation": {
      "text": "Create in me a clean heart, O God; and renew a right spirit within me. Cast me not away from thy presence; and take not thy holy spirit from me. Restore unto me the joy of thy salvation; and uphold me with thy free spirit.",
      "reference": " (Psalms 51:10-12)"
    },
    "text": {
      "title": "Today’s Text",
      "reference": " Psalms 51:1-19",
      "text": ""
    },
    "body": "The wonders and favour of God are only available to those who have a clean heart. A clean heart is very important as you seek the face of God; it is the basis to receive from God. Many are born again Christians who have received Jesus Christ as Lord and personal savior but are still suffering from the disease of an unclean heart. You may not be involved in sins but there are thoughts that keep you unclean. You may not be involved in worldly things yet your heart is unclean. Remember, your life goes the way you think because the word of God says that as a man thinks in his heart, so he is.",
    "prayer": [
      "Pray that the Holy Spirit of God will do a thorough job in your heart.",
      "Pray the Lord, through His Holy Spirit will keep you ever conscious of every little thought that goes on in your heart."
    ],
    "confession": "Confession:",
    "further_study": [
      {
        "text": "Blessed are the pure in heart: for they shall see God.",
        "reference": "Matthew 5:8:"
      },
      {
        "text": "Who shall ascend into the hill of the LORD? Or who shall stand in his holy place? He that hath clean hands, and a pure heart; who hath not lifted up his soul unto vanity, nor sworn deceitfully.",
        "reference": "Psalm 24:3-4:"
      },
      {
        "text": "Keep thy heart with all diligence; for out of it are the issues of life.",
        "reference": "Proverbs 4:23:"
      }
    ],
    "footer": " The 'Incubation' Daily Devotional is a bimonthly  publication  of Living Word Ministries Inc. ",
    "id": 2
  },
  {
    "date": "SUNDAY 28TH NOVEMBER, 2021",
    "topic": " SPECIAL FAITH IN OPERATION",
    "meditation": {
      "text": "",
      "reference": "But as one was felling a beam, the axe head fell into the water: and he cried, and said, Alas, master! for it was borrowed. And the man of God said, Where fell it? And he shewed him the place. And he cut down a stick, and cast it in thither; and the iron did swim. (2 Kings 6:5-6)"
    },
    "text": {
      "title": "Today’s Text",
      "reference": " 2 Kings 6:1-7",
      "text": ""
    },
    "body": "Everywhere in the Bible there are operations of special faith. I have never seen anyone called in the Bible who did not function in special faith as a gift. If it is not there, what are you going to work with? Prophets like Peter, Paul, Elijah and Elisha received the power of God, what about you? The power of God and gift of the Holy Spirit is necessary for you in this journey. That is what makes a man of God, that is what makes the church. The church will not be apologetic about the wicked operations of the underworld around us. Instead, the Holy Ghost will go to war.",
    "prayer": [
      "Pray for the grace to believe totally as you release the word of faith."
    ],
    "confession": "Dear Lord, as I declare your word I do it in faith believing that you are more than able to bring that which I say to come to pass.",
    "further_study": [
      {
        "text": "And there sat a certain man at Lystra, impotent in his feet, being a cripple from his mother's womb, who never had walked: The same heard Paul speak: who stedfastly beholding him, and perceiving that he had faith to be healed, Said with a loud voice, Stand upright on thy feet. And he leaped and walked. And when the people saw what Paul had done, they lifted up their voices, saying in the speech of Lycaonia, The gods are come down to us in the likeness of men.",
        "reference": "Acts 14:8-11:"
      },
      {
        "text": "And he shook off the beast into the fire, and felt no harm. Howbeit they looked when he should have swollen, or fallen down dead suddenly: but after they had looked a great while, and saw no harm come to him, they changed their minds, and said that he was a god.",
        "reference": "Acts 28:5-6:"
      }
    ],
    "footer": " The 'Incubation' Daily Devotional is a bimonthly  publication  of Living Word Ministries Inc. ",
    "id": 3
  },
  {
    "date": "MONDAY 29TH NOVEMBER, 2021",
    "topic": " THE VALUE OF A SOUL",
    "meditation": {
      "text": "Likewise, I say unto you, there is joy in the presence of the angels of God over one sinner that repenteth.",
      "reference": " (Luke 15:1-10)"
    },
    "text": {
      "title": "Today’s Text",
      "reference": " Luke 15:1-32",
      "text": ""
    },
    "body": "With the parable of the lost sheep and others like it, Jesus tried to sink in the message of soul winning. Unless soul winning gets into your blood stream you have not known the reason why you are born again. You have not known the divine assignment God gave to you. If your eyes were to be opened, nothing will prevent you from winning souls on daily basis. ",
    "prayer": [
      "Pray for the grace to value souls like the Lord values them.",
      "Pray that the desire to win souls unto Christ will always be fresh in your heart."
    ],
    "confession": ["Dear Lord, help me to be a soul winner."],
    "further_study": [
      {
        "text": "And Jesus said unto him, This day is salvation come to this house, forsomuch as he also is a son of Abraham. For the Son of man is come to seek and to save that which was lost.",
        "reference": "Luke 19:9-10:"
      },
      {
        "text": "But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.",
        "reference": "Romans 5:8:"
      },
      {
        "text": "The Lord is not slack concerning his promise, as some men count slackness; but is longsuffering to us-ward, not willing that any should perish, but that all should come to repentance.",
        "reference": "2 Peter 3:9:"
      }
    ],
    "footer": " The 'Incubation' Daily Devotional is a bimonthly  publication  of Living Word Ministries Inc. ",
    "id": 4
  },
  {
    "date": "TUESDAY 30TH NOVEMBER, 2021",
    "topic": " THE SPEED OF PRAYER",
    "meditation": {
      "text": " But Peter continued knocking: and when they had opened the door, and saw him, they were astonished.",
      "reference": " (Acts 12:16)"
    },
    "text": {
      "title": "Today’s Text",
      "reference": " Acts 12:1-17",
      "text": ""
    },
    "body": "Prayer has speed, based on your anointing, faith and closeness to God. God has given assurance that prayer unto Him has speed like that of lightning. You can receive your miracle without waste of time. The Bible says that God is slow to anger, that is the only thing He is slow about. When it comes to prayer and the request of His children, He does it speedily. Nothing can limit Him. Most times what limits God is our faith, despite that we pray, we wonder when He is going to answer. But the Lord speaks to us through the pages of the scriptures that His answer has speed. He will move with the speed of lightning to come to our aid.",
    "prayer": [
      "Pray for the grace to believe God as you pray.",
      "Pray that human reasoning will never limit the power of your prayers."
    ],
    "confession": [
      "Dear Lord, I believe and as I pray I set aside my intellect and hold unto your word in faith."
    ],
    "further_study": [
      {
        "text": "Samuel took a young lamb not yet weaned and offered it whole as a whole-burnt offering to God. He prayed fervently to God, interceding for Israel. And God answered. While Samuel was offering the sacrifice, the Philistines came within range to fight Israel. Just then God thundered, a huge thunderclap exploding among the Philistines. They panicked – mass confusion! And ran helter – skelter from Israel.",
        "reference": "1 Samuel 7:9-10(MSG):"
      },
      {
        "text": "And Jesus said unto him, Go thy way; thy faith hath made thee whole. And immediately he received his sight, and followed Jesus in the way.",
        "reference": "Mark 10:52:"
      },
      {
        "text": "And the seventy returned again with joy, saying, Lord, even the devils are subject unto us through thy name. And he said unto them, I beheld Satan as lightning fall from heaven.",
        "reference": "Luke 10:17-18:"
      }
    ],
    "footer": " The 'Incubation' Daily Devotional is a bimonthly  publication  of Living Word Ministries Inc. ",
    "id": 5
  },
  {
    "date": "WEDNESDAY 1ST DECEMBER, 2021",
    "topic": " THE RIGHT HEART",
    "meditation": {
      "text": "A good man out of the good treasure of the heart bringeth forth good things: and an evil man out of the evil treasure bringeth forth evil things.",
      "reference": " (Matthew 12:35)"
    },
    "text": {
      "title": "Today’s Text",
      "reference": " Matthew 12:33-37",
      "text": ""
    },
    "body": "Out of the abundance of the heart, the mouth speaks. When the heart is dirty, it speaks dirty. When the heart is ugly, you exude ugly character. But when your heart is clean, it sanitizes your environment and reflects in whatever you do. When your heart is negative, negative people surround you. There is always somebody hunting and trying to hurt you. The right heart brings you into a wonderful relationship with God, and when you pray God answers because your heart is right towards Him. ",
    "prayer": [
      "Pray that the Lord will give you a right heart towards Him and towards your fellow man."
    ],
    "confession": ["Dear Lord God, give me the right heart in Jesus’ name."],
    "further_study": [
      {
        "text": "“Draw nigh to God, and he will draw nigh to you. Cleanse your hands, ye sinners; and purify your hearts, ye double minded.”",
        "reference": "James 4:8:"
      },
      {
        "text": "“Let us draw near with a true heart in full assurance of faith, having our hearts sprinkled from an evil conscience, and our bodies washed with pure water.”",
        "reference": "Hebrews 10:22:"
      },
      {
        "text": "“For the eyes of the LORD run to and fro throughout the whole earth, to shew himself strong in the behalf of them whose heart is perfect toward him.”",
        "reference": "2 Chronicles 16:9a:"
      }
    ],
    "footer": "The 'Incubation' Daily Devotional is a bimonthly  publication  of Living Word Ministries Inc.",
    "id": 6
  },
  {
    "date": "THURSDAY 2ND DECEMBER, 2021",
    "topic": " NONE OF THESE DISEASES",
    "meditation": {
      "text": " And said, If thou wilt diligently hearken to the voice of the LORD thy God, and wilt do that which is right in his sight, and wilt give ear to his commandments, and keep all his statutes, I will put none of these diseases upon thee, which I have brought upon the Egyptians: for I [am] the LORD that healeth thee.",
      "reference": "  (Exodus 15:26)"
    },
    "text": {
      "title": "Today’s Text",
      "reference": " Exodus 15:1-27",
      "text": ""
    },
    "body": "A time came when the Lord God Jehovah told the children of Israel, the first church, none of these diseases. Are you afraid that what happens to others will happen to you? That is a demonic spirit speaking in your inward parts as a result of fear. You have equated yourself with people round about you, but you are a chosen generation, a royal priesthood. The Lord will always separate the righteous from the wicked. The world has its seasons: season of economic failure, recession, poverty, corona-virus, etc, but if it is not a season your father established, it does not concern you because you are different. ",
    "prayer": [
      "Cover yourself in the blood of Jesus.",
      "Pray that the word of God you hear will strengthen your mind and silence every negative voice."
    ],
    "confession": [
      "Dear Lord, thank you for I am a chosen generation, I operate by the laws of heaven. None of these things around would come near me in Jesus’ name."
    ],
    "further_study": [
      {
        "text": "“And ye shall serve the LORD your God, and he shall bless thy bread, and thy water; and I will take sickness away from the midst of thee. There shall nothing cast their young, nor be barren, in thy land: the number of thy days I will fulfil.”",
        "reference": "Exodus 23:25-26:"
      },
      {
        "text": "“And the LORD will take away from thee all sickness, and will put none of the evil diseases of Egypt, which thou knowest, upon thee; but will lay them upon all [them] that hate thee.”",
        "reference": "Deuteronomy 7:15:"
      },
      {
        "text": "“He brought them forth also with silver and gold: and [there was] not one feeble [person] among their tribes.”",
        "reference": "Psalms 105:37:"
      },
      {
        "text": "“He sent his word, and healed them, and delivered them from their destructions.”",
        "reference": "Psalm 107:20:"
      }
    ],
    "footer": " The 'Incubation' Daily Devotional is a bimonthly  publication  of Living Word Ministries Inc. ©LWM2021",
    "id": 7
  },
  {
    "date": "FRIDAY 3RD DECEMBER, 2021",
    "topic": " CALL UPON GOD",
    "meditation": {
      "text": "For the people shall dwell in Zion at Jerusalem: thou shalt weep no more: he will be very gracious unto thee at the voice of thy cry; when he shall hear it, he will answer thee.",
      "reference": " (Isaiah 30:19)"
    },
    "text": {
      "title": "Today’s Text",
      "reference": " Isaiah 30:18-26",
      "text": ""
    },
    "body": "The speed of the angels of God is the speed of lightning. The speed of ministering spirits that move around at your bidding is similar. Hebrews 1:14, “Are they not all ministering spirits, sent forth to minister for them who shall be heirs of salvation?” Send the angels on mission and they will go with speed. They are the ones that transport prayers; they do it without waste of time. How long does it take you to connect to your brothers overseas by telephone? As soon as you dial it starts ringing. It doesn’t take a second and somebody picks up. Prayer carries even more speed than that. ",
    "prayer": [" Call upon God today in that area of need."],
    "confession": [
      "Dear Lord God, I do not trust in any man, my total trust is in you.  I believe and invoke your promises concerning me today."
    ],
    "further_study": [
      {
        "text": "“And call upon me in the day of trouble: I will deliver thee, and thou shalt glorify me.”",
        "reference": "Psalm 50:15:"
      },
      {
        "text": "“As for me, I will call upon God; and the LORD shall save me. Evening, and morning, and at noon, will I pray, and cry aloud: and he shall hear my voice.”",
        "reference": "Psalm 55:16-17:"
      },
      {
        "text": "“With long life will I satisfy him, and shew him my salvation.”",
        "reference": "Psalm 91:16:"
      },
      {
        "text": "“And it shall come to pass, that before they call, I will answer; and while they are yet speaking, I will hear.”",
        "reference": "Isaiah 65:24:"
      }
    ],
    "footer": " The 'Incubation' Daily Devotional is a bimonthly  publication  of Living Word Ministries Inc. ",
    "id": 8
  },
  {
    "date": "SATURDAY 4TH DECEMBER, 2021",
    "topic": " ARE YOU BEARING FRUITS OF SOUL WINNING?",
    "meditation": {
      "text": "And he answering said unto him, Lord, let it alone this year also, till I shall dig about it, and dung it: And if it bear fruit, well: and if not, then after that thou shalt cut it down.",
      "reference": "(Luke 13:8-9)"
    },
    "text": {
      "title": "Today’s Text",
      "reference": " Luke 13:6-9",
      "text": ""
    },
    "body": "What is your job in the house of God? How many of your friends have you brought to Jesus? Soul winning should be the centre of every ministry, so many of us have deviated. How many souls have you won? Are you qualified to receive the crown of soul winners on the last day? Cut it down if it does not bear fruit, it is useless. Many young men say they are into ministry but they have nothing to do with Christ. They have a form of godliness but no power. No vision, no sacrifice. Their life is not different from the time they were in the world. When little tension arises, you don’t need a prophet to tell you that this person has never been with Christ. ",
    "prayer": ["Pray for the grace to be a soul winner."],
    "confession": [
      "Father Lord, help me to cease every opportunity to win souls into your kingdom."
    ],
    "further_study": [
      {
        "text": "“Every branch in me that beareth not fruit he taketh away: and every branch that beareth fruit, he purgeth it, that it may bring forth more fruit.”",
        "reference": "John 15:2:"
      },
      {
        "text": "“I have fought a good fight, I have finished my course, I have kept the faith: Henceforth there is laid up for me a crown of righteousness, which the Lord, the righteous judge, shall give me at that day: and not to me only, but unto all them also that love his appearing.”",
        "reference": "2 Timothy 4:7-8:"
      },
      {
        "text": "“Herein is my Father glorified, that ye bear much fruit; so shall ye be my disciples.”",
        "reference": "John 15:8:"
      }
    ],
    "footer": " The 'Incubation' Daily Devotional is a bimonthly  publication  of Living Word Ministries Inc.",
    "id": 9
  },
  {
    "date": "SUNDAY 5TH DECEMBER, 2021",
    "topic": " THE GOOD NEWS CHANGES LIVES",
    "meditation": {
      "text": "And immediately he arose, took up the bed, and went forth before them all; insomuch that they were all amazed, and glorified God, saying, We never saw it on this fashion.",
      "reference": " (Mark 2:12)"
    },
    "text": {
      "title": "Today’s Text",
      "reference": " Mark 2:1-12",
      "text": ""
    },
    "body": "Those  who came to hear the good news, the news that changes life, dug a hole in the roof. They were desperate men of faith. They had to break the ceiling. Son of man has authority. Jesus said to the paralyzed man, stand up, pick your mat and go home. The business was finished. He did not ask the man how long he had been paralysed. When the man jumped up, folded his mat and began to speed away, they were all amazed and praised God.",
    "prayer": [
      "Break every yoke of sin and silence the enemy in the name of Jesus."
    ],
    "confession": [
      "Dear Lord, above every agument and reasoning of men, let your wonders cause me to stand out from hence forth."
    ],
    "further_study": [
      {
        "text": "“The Spirit of the Lord is upon me, because he hath anointed me to preach the gospel to the poor; he hath sent me to heal the brokenhearted, to preach deliverance to the captives, and recovering of sight to the blind, to set at liberty them that are bruised, To preach the acceptable year of the Lord.”",
        "reference": "Luke 4:18-19:"
      },
      {
        "text": "“Now when they heard this, they were pricked in their heart, and said unto Peter and to the rest of the apostles, Men and brethren, what shall we do?”",
        "reference": "Acts 2:37:"
      },
      {
        "text": "“And Zacchaeus stood, and said unto the Lord; Behold, Lord, the half of my goods I give to the poor; and if I have taken any thing from any man by false accusation, I restore him fourfold. 9 And Jesus said unto him, This day is salvation come to this house, forsomuch as he also is a son of Abraham.”",
        "reference": "Luke 19:8-9:"
      }
    ],
    "footer": "The 'Incubation' Daily Devotional is a bimonthly  publication  of Living Word Ministries Inc.",
    "id": 10
  },
  {
    "date": "MONDAY 6TH DECEMBER, 2021",
    "topic": " DON’T GAMBLE WITH YOUR PRAYERS",
    "meditation": {
      "text": "For the eyes of the Lord are over the righteous, and his ears are open unto their Prayer: but the face of the Lord is against them that do evil.",
      "reference": " (1 Peter 3:12)"
    },
    "text": {
      "title": "Today’s Text",
      "reference": " Acts 4:24-31",
      "text": ""
    },
    "body": "  Prayer is real, you don’t gamble with prayers. He that cometh to God must believe that He is and is a rewarder of them that diligently seek Him. The prayer of the righteous receives a ready answer from the Living God. The only way to be righteous is to receive Christ in your heart because the righteousness God recognizes is Jesus Christ living in your soul. God does not answer the prayer of the wicked except if it is about forgiveness. Prayer is not just taking a chance, a gamble whether God will answer or not. You can accept Christ in your life and your prayers will easily get to Jesus. He will answer you without waste of time. God is not a man that He should lie, whenever He makes a promise He keeps it. God will perform His promise to you today. Do not be double-minded, just believe God for a miracle right now. ",
    "prayer": [
      "Pray for the grace to have implicit faith in the ability of God as you approach Him in prayer."
    ],
    "confession": [
      "Dear Lord God, from today I cease from worry, after I have prayed, I will put my trust completely in you for you answer the prayer of the righteous."
    ],
    "further_study": [
      {
        "text": "“And it shall come to pass, that before they call, I will answer; and while they are yet speaking, I will hear.”",
        "reference": "Isaiah 65:24:"
      },
      {
        "text": "“He shall call upon me, and I will answer him: I will be with him in trouble; I will deliver him, and honour him. With long life will I satisfy him, and shew him my salvation.”",
        "reference": "Psalm 91:15-16:"
      },
      {
        "text": "“Elias was a man subject to like passions as we are, and he prayed earnestly that it might not rain: and it rained not on the earth by the space of three years and six months.”",
        "reference": "James 5:17:"
      }
    ],
    "footer": "The 'Incubation' Daily Devotional is a bimonthly  publication  of Living Word Ministries Inc.",
    "id": 11
  },
  {
    "date": "TUESDAY 7TH DECEMBER, 2021",
    "topic": " SET YOUR GAZE ON THE ANOINTING",
    "meditation": {
      "text": "The Spirit of the Lord is upon me, because he hath anointed me to preach the gospel to the poor; he hath sent me to heal the brokenhearted, to preach deliverance to the captives, and recovering of sight to the blind, to set at liberty them that are bruised, 19 To preach the acceptable year of the Lord.",
      "reference": " (Luke 4:18-19)"
    },
    "text": {
      "title": "Today’s Text",
      "reference": " Luke 4:14-21",
      "text": ""
    },
    "body": "Signs and wonders must follow them that believe. Anointing is a workaholic. When the anointing is there, you don’t need human efforts. Anointing will do the business. That is what it means to be baptized by the Holy Ghost so that the anointing can work for you. That is the essence of ministry. When anointing comes upon the man of God you will no longer see the arm of flesh but the finger of God in operation. Today is the day of healing, miracles, signs and wonders. ",
    "prayer": [
      "Pray that the anointing of the Lord will descend upon you today."
    ],
    "confession": [
      "Dear Lord, today is the day of liberty. As I fix my gaze on you, anoint me for the supernatural in Jesus’ name."
    ],
    "further_study": [
      {
        "text": "“And when Jesus saw her, he called her to him, and said unto her, Woman, thou art loosed from thine infirmity. And he laid his hands on her: and immediately she was made straight, and glorified God.”",
        "reference": "Luke 13:12-13:"
      },
      {
        "text": "“And the seventy returned again with joy, saying, Lord, even the devils are subject unto us through thy name.”",
        "reference": "Luke 10:17:"
      },
      {
        "text": "“And the people with one accord gave heed unto those things which Philip spake, hearing and seeing the miracles which he did. For unclean spirits, crying with loud voice, came out of many that were possessed with them: and many taken with palsies, and that were lame, were healed.”",
        "reference": "Acts 8:6-7:"
      }
    ],
    "footer": " The 'Incubation' Daily Devotional is a bimonthly  publication  of Living Word Ministries Inc.  ",
    "id": 12
  },
  {
    "date": "WEDNESDAY 8TH DECEMBER, 2021",
    "topic": " A LIVING SACRIFICE",
    "meditation": {
      "text": " I beseech you therefore, brethren, by the mercies of God, that ye present your bodies a living sacrifice, holy, acceptable unto God, which is your reasonable service.",
      "reference": " (Romans 12:1)"
    },
    "text": {
      "title": "Today’s Text",
      "reference": " Romans 12:1-4",
      "text": ""
    },
    "body": "Before you give to God, sit back and think about what you want to give because of the personality involved. God looks at the heart; He looks at the spirit with which you are doing what you are doing. What God is after is the spiritual content of your sacrifice. If you want to offer a sincere sacrifice, offer the highest quality sacrifice with spiritual content. When the Lord has bought you over and you serve Him in spirit and in truth you will learn to offer unto Him quality sacrifice such that is acceptable unto Him. Sacrificing your life in the service of God is the highest form of sacrifice. God is making a demand that your life be presented on the altar. Instead of using some other things to make this sacrifice, present your whole life as a living sacrifice. ",
    "prayer": ["Dedicate your life to the Lord today, a living sacrifice."],
    "confession": [
      "Lord I present my entire being and all that I am a living sacrifice unto you. Let my life bring glory to your name."
    ],
    "further_study": [
      {
        "text": "“And they stoned Stephen, calling upon God, and saying, Lord Jesus, receive my spirit. And he kneeled down, and cried with a loud voice, Lord, lay not this sin to their charge. And when he had said this, he fell asleep.”",
        "reference": "Acts 7:59-60:"
      },
      {
        "text": "“Even as the Son of man came not to be ministered unto, but to minister, and to give his life a ransom for many.”",
        "reference": "Matthew 20:28:"
      },
      {
        "text": "“But I keep under my body, and bring it into subjection: lest that by any means, when I have preached to others, I myself should be a castaway.”",
        "reference": "1 Corinthians 9:27:"
      }
    ],
    "footer": " The 'Incubation' Daily Devotional is a bimonthly  publication  of Living Word Ministries Inc.",
    "id": 13
  },
  {
    "date": "THURSDAY 9TH DECEMBER, 2021",
    "topic": " USE EVERY OPPORTUNITY TO INTRODUCE CHRIST",
    "meditation": {
      "text": "Jesus answered and said unto her, If thou knewest the gift of God, and who it is that saith to thee, Give me to drink; thou wouldest have asked of him, and he would have given thee living water.",
      "reference": " (John 4:10)"
    },
    "text": {
      "title": "Today’s Text",
      "reference": " John 4:1-16",
      "text": ""
    },
    "body": "Sitting out in public places like a mall, a market or a cinema where people go very often is a great avenue to create contact. Many great opportunities have eluded insensitive men of God during ceremonies like birthdays, weddings and burials of loved ones. Every opportunity, as long as Christ was concerned, was geared towards heaven. Great ceremonies should be a connecting link for soul winning. Invite unbelievers, share your story and the Holy Spirit will come down from heaven. Souls will be born again.",
    "prayer": [
      " Pray for the spiritual alertness to convert every occasion to win souls for Christ.",
      " Pray that soul winning will be of paramount importance to you as it is to God."
    ],
    "confession": [
      "Dear Lord, the soul of men is most important to you, help me to take the issue of soul winning serious as you have taken it."
    ],
    "further_study": [
      {
        "text": "“Then Agrippa said unto Paul, Almost thou persuadest me to be a Christian. And Paul said, I would to God, that not only thou, but also all that hear me this day, were both almost, and altogether such as I am, except these bonds.”",
        "reference": "Acts 26:28-29:"
      },
      {
        "text": "“And the lord said unto the servant, Go out into the highways and hedges, and compel them to come in, that my house may be filled.”",
        "reference": "Luke 14:23:"
      },
      {
        "text": "“And brought them out, and said, Sirs, what must I do to be saved? And they said, Believe on the Lord Jesus Christ, and thou shalt be saved, and thy house.”",
        "reference": "Acts 16:30-31:"
      }
    ],
    "footer": " The 'Incubation' Daily Devotional is a bimonthly  publication  of Living Word Ministries Inc. ",
    "id": 14
  },
  {
    "date": "FRIDAY 10TH DECEMBER, 2021",
    "topic": " VOWS UNLOCK STUBBORN DOORS",
    "meditation": {
      "text": "And she vowed a vow, and said, O LORD of hosts, if thou wilt indeed look on the affliction of thine handmaid, and remember me, and not forget thine handmaid, but wilt give unto thine handmaid a man child, then I will give him unto the LORD all the days of his life, and there shall no razor come upon his head.",
      "reference": "(1 Samuel 1:11)"
    },
    "text": {
      "title": "Today’s Text",
      "reference": " 1 Samuel 1:11-28",
      "text": ""
    },
    "body": "There are established spiritual approaches for breakthrough, one of them is vow. Vows unlock stubborn doors. No matter how stubborn the door may be, vow will unlock it. When man comes to a tight corner where he does not know what to do, he can make a vow to God. A vow is a sure way to employ the help of God in a state of confusion. Your vow denotes seriousness, reaching out to God for help. Have you done all you can but nothing is happening? It is time to make a vow. Have you come to a point no one can help you, has the doctor told you that death is imminent? Make a vow concerning that situation. Have you tried various avenues to no avail? Have you gone to those whom you think can help your situation yet the problem is still where it is? If the Lord does not help you, nobody can. He knows where you are hurting, make a vow. ",
    "prayer": [
      "Pray that God will make you sensitive to know when to make a vow."
    ],
    "confession": [
      "Dear Lord, as I make a vow to you today, fight for me in Jesus’ name, amen."
    ],
    "further_study": [
      {
        "text": "“And Jacob vowed a vow, saying, If God will be with me, and will keep me in this way that I go, and will give me bread to eat, and raiment to put on.”",
        "reference": "Genesis 28:20:"
      },
      {
        "text": "“But I will sacrifice unto thee with the voice of thanksgiving; I will pay that that I have vowed. Salvation is of the LORD.”",
        "reference": "Jonah 2:9:"
      },
      {
        "text": "“And Jephthah vowed a vow unto the LORD, and said, If thou shalt without fail deliver the children of Ammon into mine hands.”",
        "reference": "Judges 11:30:"
      }
    ],
    "footer": " The 'Incubation' Daily Devotional is a bimonthly  publication  of Living Word Ministries Inc. ",
    "id": 15
  },
  {
    "date": "SATURDAY 11TH DECEMBER, 2021",
    "topic": " LET THE WORD OF GOD CLEANSE YOU",
    "meditation": {
      "text": "Wherewithal shall a young man cleanse his way? By taking heed thereto according to thy word. With my whole heart have I sought thee: O let me not wander from thy commandments. Thy word have I hid in mine heart, that I might not sin against thee.",
      "reference": " (Psalms 119:9-11)"
    },
    "text": {
      "title": "Today’s Text",
      "reference": " Psalms 119:7-16",
      "text": ""
    },
    "body": "Sometime ago, a certain believe went to the market to sell her goods, someone came and started insulting her, calling her all sorts of names. In response to the offensive words, she responded, “You are blessed. God bless you.” She blessed the person abusing her instead of cursing her back. People around tried to persuade her to retaliate the ugly words but she said, “No, I don’t have such language in my vocabulary.” You cannot fake being born again; by your fruit we shall know you. You cannot be a child of God and still use a language from the pit of hell. The word of God has not cleansed you. It has not sanctified you. Let your spirit be recreated today, let your heart be washed. Don’t say it is your manner of life, or that is the way you speak. If you are in Christ, you are a new creature, God should also change the way you speak. ",
    "prayer": [
      "Pray for the grace to make the word of God your companion.",
      "Pray for the grace to make the change as the Spirit of God exposes your weaknesses."
    ],
    "confession": [
      "Dear Lord, I receive the inner strength to control my anger, my words, my reactions and my character in line with your word in Jesus’ name."
    ],
    "further_study": [
      {
        "text": "“Let the word of Christ dwell in you richly in all wisdom; teaching and admonishing one another in psalms and hymns and spiritual songs, singing with grace in your hearts to the Lord.”",
        "reference": "Colossians 3:16:"
      },
      {
        "text": "“Now ye are clean through the word which I have spoken unto you.”",
        "reference": "John 15:3:"
      },
      {
        "text": "“That he might sanctify and cleanse it with the washing of water by the word,”",
        "reference": " Ephesians 5:26:"
      }
    ],
    "footer": " The 'Incubation' Daily Devotional is a bimonthly  publication  of Living Word Ministries Inc. ",
    "id": 16
  }
]`);

export default Incubation;

enum MonthList {
	JANUARY = 1,
	FEBRUARY,
	MARCH,
	APRIL,
	MAY,
	JUNE,
	JULY,
	AUGUST,
	SEPTEMBER,
	OCTOBER,
	NOVEMBER,
	DECEMBER,
}
// FILE  incubation/incubationDataTypes

// FILE  conrollers/incubationController
export const parseDate: (date: string) => Date = (date: string) => {
	let dateArr = date.replace(",", "").split(" ");

	let day = parseInt(dateArr[1]);
	let month: any = dateArr[2];
	let year = parseInt(dateArr[3]);
	month = MonthList[month];

	return new Date(`${month}-${day}-${year}`);
};

export function getIncubationByDate(date: string) {
	const incubation = getIncubationState();
	// console.log("incubation_:  ", incubation);
	return incubation.find((i) => i.date == date);
}
