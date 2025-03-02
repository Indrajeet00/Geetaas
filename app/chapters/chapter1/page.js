import BookPage from "@/app/components/BookPage";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="bg-orange-100 p-10">
      <div className="pt-10 ">
        <h2 className="text-2xl text-center font-sans font-bold">Chapter1</h2>
        <h1 className="text-5xl text-center font-sans font-bold bg-gradient-to-l from-blue-800 to-orange-400 bg-clip-text text-transparent">
          Arjuna Visada Yoga
        </h1>
      </div>

      <div className="flex flex-col justify-center items-center p-3">
        <p className="text-4xl text-center font-sans font-bold mt-10">Verses</p>
        <div className="w-full flex bg-orange-100 mt-10  sticky top-[13%] z-20 overflow-auto rounded-md">
          <div className="flex flex-col justify-center sticky left-0 bg-orange-400 p-4">
          <p className="text-center">Verses47</p>
          </div>
          <div className="flex flex-row">
          <a href="#sec0">
          <button className="p-4 w-full border-2">1</button>
          </a>
          <a href="#sec1">
          <button className="p-4 w-full border-2 hover:bg-violet-600 active:bg-violet-700  focus:ring focus:ring-violet-300">2</button>
          </a>
          <a href="#sec2">
          <button className="p-4 w-full border-2 ">3</button>
          </a>
          <a href="#sec3">
          <button className="p-4 w-full border-2">4</button>
          </a>
          <a href="#sec4">
          <button className="p-4 w-full border-2">5</button>
          </a>
          <a href="#sec5">
          <button className="p-4 w-full border-2">6</button>
          </a>
          <a href="#sec6">
          <button className="p-4 w-full border-2">7</button>
          </a>
          <a href="#sec7">
          <button className="p-4 w-full border-2">8</button>
          </a>
          <a href="#sec8">
          <button className="p-4 w-full border-2">9</button>
          </a>
          <a href="#sec9">
          <button className="p-4 w-full border-2">10</button>
          </a>
          <a href="#sec10">
          <button className="p-4 w-full border-2">11</button>
          </a>
          <a href="#sec11">
          <button className="p-4 w-full border-2">12</button>
          </a>
          <a href="#sec12">
          <button className="p-4 w-full border-2">13</button>
          </a>
          <a href="#sec13">
          <button className="p-4 w-full border-2">14</button>
          </a>
          <a href="#sec14">
          <button className="p-4 w-full border-2">15</button>
          </a>
          <a href="#sec15">
          <button className="p-4 w-full border-2">16</button>
          </a>
          <a href="#sec16">
          <button className="p-4 w-full border-2">17</button>
          </a>
          <a href="#sec17">
          <button className="p-4 w-full border-2">18</button>
          </a>
          <a href="#sec18">
          <button className="p-4 w-full border-2">19</button>
          </a>
          <a href="#sec19">
          <button className="p-4 w-full border-2">20</button>
          </a>
          <a href="#sec20">
          <button className="p-4 w-full border-2">21</button>
          </a>
          <a href="#sec21">
          <button className="p-4 w-full border-2">22</button>
          </a>
          <a href="#sec22">
          <button className="p-4 w-full border-2">23</button>
          </a>
          <a href="#sec23">
          <button className="p-4 w-full border-2">24</button>
          </a>
          <a href="#sec24">
          <button className="p-4 w-full border-2">25</button>
          </a>
          <a href="#sec25">
          <button className="p-4 w-full border-2">26</button>
          </a>
          <a href="#sec26">
          <button className="p-4 w-full border-2">27</button>
          </a>
          <a href="#sec27">
          <button className="p-4 w-full border-2">28</button>
          </a>
          <a href="#sec28">
          <button className="p-4 w-full border-2">29</button>
          </a>
          <a href="#sec29">
          <button className="p-4 w-full border-2">30</button>
          </a>
          <a href="#sec30">
          <button className="p-4 w-full border-2">31</button>
          </a>
          <a href="#sec31">
          <button className="p-4 w-full border-2">32</button>
          </a>
          <a href="#sec32">
          <button className="p-4 w-full border-2">33</button>
          </a>
          <a href="#sec33">
          <button className="p-4 w-full border-2">34</button>
          </a>
          <a href="#sec34">
          <button className="p-4 w-full border-2">35</button>
          </a>
          <a href="#sec35">
          <button className="p-4 w-full border-2">36</button>
          </a>
          <a href="#sec36">
          <button className="p-4 w-full border-2">37</button>
          </a>
          <a href="#sec37">
          <button className="p-4 w-full border-2">38</button>
          </a>
          <a href="#sec38">
          <button className="p-4 w-full border-2">39</button>
          </a>
          <a href="#sec39">
          <button className="p-4 w-full border-2">40</button>
          </a>
          <a href="#sec40">
          <button className="p-4 w-full border-2">41</button>
          </a>
          <a href="#sec41">
          <button className="p-4 w-full border-2">42</button>
          </a>
          <a href="#sec42">
          <button className="p-4 w-full border-2">43</button>
          </a>
          <a href="#sec43">
          <button className="p-4 w-full border-2">44</button>
          </a>
          <a href="#sec44">
          <button className="p-4 w-full border-2">45</button>
          </a>
          <a href="#sec45">
          <button className="p-4 w-full border-2">46</button>
          </a>
          <a href="#sec46">
          <button className="p-4 w-full border-2">47</button>
          </a>
          </div>
        </div>



        
        <img className="h-[130vh] w-[80vw] mt-16" src="/img.png" alt=""></img>
        <BookPage storyList={storyList}/>
        {/* <div className="h-[143vh] w-[54vw] overflow-auto brows absolute top-[86%] left-[20%] p-5 mt-5 my-scrollbar">
          <div  id="sec1" className="p-10">
            <h4 className="text-xl text-center font-sans font-bold">VERSE1</h4>
            <p className="text-md text-center mt-2 font-sans">
              धृतराष्ट्र उवाच धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः। मामकाः
              पाण्डवाश्चैव किमकुर्वत सञ्जय।।1.1।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              Dhritarashtra said, "What did my people and the sons of Pandu do
              when they had assembled together, eager for battle, on the holy
              plain of Kurukshetra, O Sanjaya?"
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec2" className="text-xl text-center font-sans font-bold">VERSE2</h4>
            <p className="text-md text-center mt-2 font-sans">
              सञ्जय उवाच दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा।
              आचार्यमुपसङ्गम्य राजा वचनमब्रवीत्।।1.2।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              Sanjaya said: Having seen the army of the Pandavas drawn up in
              battle array, King Duryodhana approached his teacher, Drona, and
              spoke these words.
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec3" className="text-xl text-center font-sans font-bold">VERSE3</h4>
            <p className="text-md text-center mt-2 font-sans">
              पश्यैतां पाण्डुपुत्राणामाचार्य महतीं चमूम्। व्यूढां द्रुपदपुत्रेण
              तव शिष्येण धीमता।।1.3।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              Behold, O Teacher! This mighty army of the sons of Pandu, arrayed
              by the son of Drupada, thy wise disciple.
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec4" className="text-xl text-center font-sans font-bold">VERSE4</h4>
            <p className="text-md text-center mt-2 font-sans">
              अत्र शूरा महेष्वासा भीमार्जुनसमा युधि। युयुधानो विराटश्च द्रुपदश्च
              महारथः।।1.4।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              Here are heroes, mighty archers, equal in battle to Bhima and
              Arjuna, Yuyudhana (Satyaki), Virata, and Drupada—all mighty
              warriors.
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec5" className="text-xl text-center font-sans font-bold">VERSE5</h4>
            <p className="text-md text-center mt-2 font-sans">
              धृधृष्टकेतुश्चेकितानः काशिराजश्च वीर्यवान्। पुरुजित्कुन्तिभोजश्च
              शैब्यश्च नरपुङ्गवः।।1.5।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              Dhrishtaketu, Chekitana, the valiant king of Kasi, Purujit,
              Kuntibhoja, and Saibya—the best of men.
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec6" className="text-xl text-center font-sans font-bold">VERSE6</h4>
            <p className="text-md text-center mt-2 font-sans">
              युधामन्युश्च विक्रान्त उत्तमौजाश्च वीर्यवान्। सौभद्रो द्रौपदेयाश्च
              सर्व एव महारथाः।।1.6।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              The strong Yudhamanyu and the brave Uttamaujas, the son of
              Subhadra (Abhimanyu, the son of Subhadra and Arjuna), and the sons
              of Draupadi, all of them great charioteers (great heroes)."
            </p>
          </div>
          <div className="w-full p-10 ">
            <h4 id="sec7" className="text-xl text-center font-sans font-bold">VERSE7</h4>
            <p className="text-md text-center mt-2 font-sans">
              अस्माकं तु विशिष्टा ये तान्निबोध द्विजोत्तम। नायका मम सैन्यस्य
              संज्ञार्थं तान्ब्रवीमि ते।।1.7।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              Know also, O best among the twice-born! the names of those who are
              the most distinguished amongst ourselves, the leaders of my army;
              these I name to you for your information.
            </p>
          </div>
          <div className="w-full p-10 ">
            <h4 id="sec8" className="text-xl text-center font-sans font-bold">VERSE8</h4>
            <p className="text-md text-center mt-2 font-sans">
              भवान्भीष्मश्च कर्णश्च कृपश्च समितिञ्जयः। अश्वत्थामा विकर्णश्च
              सौमदत्तिस्तथैव च।।1.8।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              "Thou thyself, Bhishma, Karna, Kripa, the victorious in war,
              Asvatthama, Vikarna, and Bhurisrava, the son of Somadatta—all
              these are ready for battle."
            </p>
          </div>
          <div className="w-full p-10 ">
            <h4 id="sec9" className="text-xl text-center font-sans font-bold">VERSE9</h4>
            <p className="text-md text-center mt-2 font-sans">
              अन्ये च बहवः शूरा मदर्थे त्यक्तजीविताः। नानाशस्त्रप्रहरणाः सर्वे
              युद्धविशारदाः।।1.9।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              And also many other heroes, ready to give up their lives for my
              sake, armed with various weapons and missiles, all well-skilled in
              battle.
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec10" className="text-xl text-center font-sans font-bold ">VERSE10</h4>
            <p className="text-md text-center mt-2 font-sans">
              अपर्याप्तं तदस्माकं बलं भीष्माभिरक्षितम्। पर्याप्तं त्विदमेतेषां
              बलं भीमाभिरक्षितम्।।1.10।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              Our army, marshalled by Bhishma, is insufficient, whereas theirs,
              marshalled by Bhima, is sufficient.
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec11" className="text-xl text-center font-sans font-bold">VERSE11</h4>
            <p className="text-md text-center mt-2 font-sans">
              अयनेषु च सर्वेषु यथाभागमवस्थिताः। भीष्ममेवाभिरक्षन्तु भवन्तः सर्व
              एव हि।।1.11।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              Therefore, do all of you, stationed in your respective positions
              in the several divisions of the army, protect Bhishma alone.
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec12" className="text-xl text-center font-sans font-bold">VERSE12</h4>
            <p className="text-md text-center mt-2 font-sans">
              तस्य संजनयन्हर्षं कुरुवृद्धः पितामहः। सिंहनादं विनद्योच्चैः शङ्खं
              दध्मौ प्रतापवान्।।1.12।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              His glorious grandsire, the oldest of the Kauravas, roared like a
              lion to cheer Duryodhana and blew his conch.
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec13" className="text-xl text-center font-sans font-bold">VERSE13</h4>
            <p className="text-md text-center mt-2 font-sans">
              ततः शङ्खाश्च भेर्यश्च पणवानकगोमुखाः। सहसैवाभ्यहन्यन्त स
              शब्दस्तुमुलोऽभवत्।।1.13।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              Then, suddenly, conches, kettledrums, tabors, drums, and cow horns
              blared forth from the Kaurava side, and the sound was tremendous.
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec14" className="text-xl text-center font-sans font-bold">VERSE14</h4>
            <p className="text-md text-center mt-2 font-sans">
              ततः श्वेतैर्हयैर्युक्ते महति स्यन्दने स्थितौ। माधवः पाण्डवश्चैव
              दिव्यौ शङ्खौ प्रदध्मतुः।।1.14।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              Then, Madhava (Krishna) and the son of Pandu (Arjuna), seated in
              the magnificent chariot yoked with white horses, blew divine
              conches.
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec15" className="text-xl text-center font-sans font-bold">VERSE15</h4>
            <p className="text-md text-center mt-2 font-sans">
              पाञ्चजन्यं हृषीकेशो देवदत्तं धनंजयः। पौण्ड्रं दध्मौ महाशङ्खं
              भीमकर्मा वृकोदरः।।1.15।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              Hrishikesha blew the Panchajanya, Arjuna blew the Devadatta, and
              Bhima, the wolf-bellied doer of terrible deeds, blew the great
              conch Paundra.
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec16" className="text-xl text-center font-sans font-bold">VERSE16</h4>
            <p className="text-md text-center mt-2 font-sans">
              अनन्तविजयं राजा कुन्तीपुत्रो युधिष्ठिरः। नकुलः सहदेवश्च
              सुघोषमणिपुष्पकौ।।1.16।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              King Yudhishthira, the son of Kunti, blew the Anantavijaya; Nakula
              and Sahadeva blew the Sughosha and the Manipushpaka.
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec17" className="text-xl text-center font-sans font-bold">VERSE17</h4>
            <p className="text-md text-center mt-2 font-sans">
              काश्यश्च परमेष्वासः शिखण्डी च महारथः। धृष्टद्युम्नो विराटश्च
              सात्यकिश्चापराजितः।।1.17।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              The king of Kasi, an excellent archer, Sikhandi, the mighty
              car-warrior, Dhrishtadyumna, Virata, and Satyaki, the unconquered.
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec18" className="text-xl text-center font-sans font-bold">VERSE18</h4>
            <p className="text-md text-center mt-2 font-sans">
              द्रुपदो द्रौपदेयाश्च सर्वशः पृथिवीपते। सौभद्रश्च महाबाहुः
              शङ्खान्दध्मुः पृथक्पृथक्।।1.18।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              Drupada and the sons of Draupadi, O Lord of the Earth, and the son
              of Subhadra, the mighty-armed, blew their conches each separately.
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec19" className="text-xl text-center font-sans font-bold">VERSE19</h4>
            <p className="text-md text-center mt-2 font-sans">
              स घोषो धार्तराष्ट्राणां हृदयानि व्यदारयत्। नभश्च पृथिवीं चैव
              तुमुलो व्यनुनादयन्।।1.19।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              The tumultuous sound rent the hearts of Dhritarashtra's party,
              reverberating through both heaven and earth.
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec20" className="text-xl text-center font-sans font-bold">VERSE20</h4>
            <p className="text-md text-center mt-2 font-sans">
              अथ व्यवस्थितान् दृष्ट्वा धार्तराष्ट्रान्कपिध्वजः। प्रवृत्ते
              शस्त्रसंपाते धनुरुद्यम्य पाण्डवः।।1.20।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              Then, seeing the people of Dhritarashtra's party standing arrayed
              and the discharge of weapons about to begin, Arjuna, the son of
              Pandu whose ensign was a monkey, took up his bow and said the
              following to Krishna, O Lord of the Earth.
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec21" className="text-xl text-center font-sans font-bold">VERSE21</h4>
            <p className="text-md text-center mt-2 font-sans">
              अर्जुन उवाच हृषीकेशं तदा वाक्यमिदमाह महीपते। सेनयोरुभयोर्मध्ये रथं
              स्थापय मेऽच्युत।।1.21।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              Arjuna said, "O Krishna, place my chariot in the middle between
              the two armies, so that I may behold those who stand here,
              desirous to fight, and know with whom I must fight when the battle
              is about to commence."
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec22" className="text-xl text-center font-sans font-bold">VERSE22</h4>
            <p className="text-md text-center mt-2 font-sans">
              यावदेतान्निरीक्षेऽहं योद्धुकामानवस्थितान्। कैर्मया सह
              योद्धव्यमस्मिन्रणसमुद्यमे।।1.22।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              Arjuna said, "O Krishna, place my chariot in the middle between
              the two armies, so that I may behold those who stand here,
              desirous to fight, and know with whom I must fight when the battle
              is about to commence."
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec23" className="text-xl text-center font-sans font-bold">VERSE23</h4>
            <p className="text-md text-center mt-2 font-sans">
              योत्स्यमानानवेक्षेऽहं य एतेऽत्र समागताः। धार्तराष्ट्रस्य
              दुर्बुद्धेर्युद्धे प्रियचिकीर्षवः।।1.23।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              For I desire to observe those who are assembled here to fight,
              wishing to please in battle the evil-minded Duryodhana—the son of
              Dhritarashtra.
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec24" className="text-xl text-center font-sans font-bold">VERSE24</h4>
            <p className="text-md text-center mt-2 font-sans">
              संजय उवाच एवमुक्तो हृषीकेशो गुडाकेशेन भारत। सेनयोरुभयोर्मध्ये
              स्थापयित्वा रथोत्तमम्।।1.24।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              Sanjaya said, Thus addressed by Arjuna, Krishna stationed the best
              of chariots, O Dhritarashtra, in the midst of the two armies.
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec25" className="text-xl text-center font-sans font-bold">VERSE25</h4>
            <p className="text-md text-center mt-2 font-sans">
              भीष्मद्रोणप्रमुखतः सर्वेषां च महीक्षिताम्। उवाच पार्थ
              पश्यैतान्समवेतान्कुरूनिति।।1.25।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              In front of Bhishma and Drona, and all the rulers of the earth, he
              said: "O Arjuna, son of Pritha, behold these Kurus gathered
              together."
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec26" className="text-xl text-center font-sans font-bold">VERSE26</h4>
            <p className="text-md text-center mt-2 font-sans">
              तत्रापश्यत्स्थितान्पार्थः पितृ़नथ पितामहान्।
              आचार्यान्मातुलान्भ्रातृ़न्पुत्रान्पौत्रान्सखींस्तथा।।1.26।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              Then, Arjuna (son of Pritha) saw there (in the armies) stationed
              fathers, grandfathers, teachers, maternal uncles, brothers, sons,
              grandsons, and friends.
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec27" className="text-xl text-center font-sans font-bold">VERSE27</h4>
            <p className="text-md text-center mt-2 font-sans">
              श्वशुरान्सुहृदश्चैव सेनयोरुभयोरपि। तान्समीक्ष्य स कौन्तेयः
              सर्वान्बन्धूनवस्थितान्।।1.27।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              He saw fathers-in-law and friends in both the armies. The son of
              Kunti, Arjuna, seeing all those kinsmen thus standing arrayed,
              spoke sorrowfully, deeply filled with pity.
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec28" className="text-xl text-center font-sans font-bold">VERSE28</h4>
            <p className="text-md text-center mt-2 font-sans">
              अर्जुन उवाच कृपया परयाऽऽविष्टो विषीदन्निदमब्रवीत्। दृष्ट्वेमं
              स्वजनं कृष्ण युयुत्सुं समुपस्थितम्।।1.28।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              Arjuna said, "O Krishna, seeing my kinsmen arrayed here, eager to
              fight,
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec29" className="text-xl text-center font-sans font-bold">VERSE29</h4>
            <p className="text-md text-center mt-2 font-sans">
              सीदन्ति मम गात्राणि मुखं च परिशुष्यति। वेपथुश्च शरीरे मे
              रोमहर्षश्च जायते।।1.29।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              My limbs fail, my mouth is parched, my body quivers, and my hair
              stands on end.
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec30" className="text-xl text-center font-sans font-bold">VERSE30</h4>
            <p className="text-md text-center mt-2 font-sans">
              गाण्डीवं स्रंसते हस्तात्त्वक्चैव परिदह्यते। न च शक्नोम्यवस्थातुं
              भ्रमतीव च मे मनः।।1.30।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              The Gandiva slips from my hand, and my skin burns all over; I am
              unable to stand, and my mind is reeling, as it were.
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec31" className="text-xl text-center font-sans font-bold">VERSE31</h4>
            <p className="text-md text-center mt-2 font-sans">
              निमित्तानि च पश्यामि विपरीतानि केशव। न च श्रेयोऽनुपश्यामि हत्वा
              स्वजनमाहवे।।1.31।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              And I see ill omens, O Kesava. I do not see any good in slaying my
              kinsmen in battle.
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec32" className="text-xl text-center font-sans font-bold">VERSE32</h4>
            <p className="text-md text-center mt-2 font-sans">
              न काङ्क्षे विजयं कृष्ण न च राज्यं सुखानि च। किं नो राज्येन गोविन्द
              किं भोगैर्जीवितेन वा।।1.32।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              I desire not victory, O Krishna, nor kingdom, nor pleasures. What
              use is dominion to us, O Krishna, or pleasures or even life?
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec33" className="text-xl text-center font-sans font-bold">VERSE33</h4>
            <p className="text-md text-center mt-2 font-sans">
              येषामर्थे काङ्क्षितं नो राज्यं भोगाः सुखानि च। त इमेऽवस्थिता
              युद्धे प्राणांस्त्यक्त्वा धनानि च।।1.33।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              Those for whose sake we desire kingdom, enjoyments, and pleasures
              stand here in battle, having renounced life and wealth.
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec34" className="text-xl text-center font-sans font-bold">VERSE34</h4>
            <p className="text-md text-center mt-2 font-sans">
              आचार्याः पितरः पुत्रास्तथैव च पितामहाः। मातुलाः श्चशुराः पौत्राः
              श्यालाः सम्बन्धिनस्तथा।।1.34।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              Teachers, fathers, sons, and grandfathers, maternal uncles,
              fathers-in-law, grandsons, brothers-in-law, and other relatives—
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec35" className="text-xl text-center font-sans font-bold">VERSE35</h4>
            <p className="text-md text-center mt-2 font-sans">
              एतान्न हन्तुमिच्छामि घ्नतोऽपि मधुसूदन। अपि त्रैलोक्यराज्यस्य हेतोः
              किं नु महीकृते।।1.35।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              These I do not wish to kill, O Krishna, even though they kill me,
              for the sake of dominion over the three worlds; leave alone
              killing them for the sake of the earth."
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec36" className="text-xl text-center font-sans font-bold">VERSE36</h4>
            <p className="text-md text-center mt-2 font-sans">
              निहत्य धार्तराष्ट्रान्नः का प्रीतिः स्याज्जनार्दन।
              पापमेवाश्रयेदस्मान्हत्वैतानाततायिनः।।1.36।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              By killing these sons of Dhritarashtra, what pleasure could be
              ours, O Janardana? Only sin would accrue to us from killing these
              felons.
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec37" className="text-xl text-center font-sans font-bold">VERSE37</h4>
            <p className="text-md text-center mt-2 font-sans">
              तस्मान्नार्हा वयं हन्तुं धार्तराष्ट्रान्स्वबान्धवान्। स्वजनं हि
              कथं हत्वा सुखिनः स्याम माधव।।1.37।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              Therefore, we should not kill the sons of Dhritarashtra, our
              relatives; for how can we be happy by killing our own kin, O
              Madhava (Krishna)?
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec38" className="text-xl text-center font-sans font-bold">VERSE38</h4>
            <p className="text-md text-center mt-2 font-sans">
              यद्यप्येते न पश्यन्ति लोभोपहतचेतसः। कुलक्षयकृतं दोषं मित्रद्रोहे च
              पातकम्।।1.38।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              Though they, with intelligence overpowered by greed, see no evil
              in the destruction of families and no sin in hostility to friends,
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec39" className="text-xl text-center font-sans font-bold">VERSE39</h4>
            <p className="text-md text-center mt-2 font-sans">
              कथं न ज्ञेयमस्माभिः पापादस्मान्निवर्तितुम्। कुलक्षयकृतं दोषं
              प्रपश्यद्भिर्जनार्दन।।1.39।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              Why should we not, who clearly see the evil in the destruction of
              families, learn to turn away from this sin, O Janardana (Krishna)?
            </p>
          </div>
          <div className="w-full p-10 ">
            <h4 id="sec40" className="text-xl text-center font-sans font-bold">VERSE40</h4>
            <p className="text-md text-center mt-2 font-sans">
              कुलक्षये प्रणश्यन्ति कुलधर्माः सनातनाः। धर्मे नष्टे कुलं
              कृत्स्नमधर्मोऽभिभवत्युत।।1.40।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              In the destruction of a family, the immemorial religious rites of
              that family perish; on the destruction of spirituality, impiety
              indeed, overwhelms the whole family.
            </p>
          </div>
          <div className="w-full p-10 ">
            <h4 id="sec41" className="text-xl text-center font-sans font-bold">VERSE41</h4>
            <p className="text-md text-center mt-2 font-sans">
              अधर्माभिभवात्कृष्ण प्रदुष्यन्ति कुलस्त्रियः। स्त्रीषु दुष्टासु
              वार्ष्णेय जायते वर्णसङ्करः।।1.41।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              O Krishna, by the prevalence of impiety, the women of the family
              become corrupt; and, when women are corrupted, O Varshenya
              (descendant of Vrishni), intermingling of castes arises.
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec42" className="text-xl text-center font-sans font-bold">VERSE42</h4>
            <p className="text-md text-center mt-2 font-sans">
              सङ्करो नरकायैव कुलघ्नानां कुलस्य च। पतन्ति पितरो ह्येषां
              लुप्तपिण्डोदकक्रियाः।।1.42।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              Confusion of castes leads to hell for the slayers of the family,
              for their forebears fall, deprived of the offerings of rice-balls
              and libations of water.
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec43" className="text-xl text-center font-sans font-bold">VERSE43</h4>
            <p className="text-md text-center mt-2 font-sans">
              दोषैरेतैः कुलघ्नानां वर्णसङ्करकारकैः। उत्साद्यन्ते जातिधर्माः
              कुलधर्माश्च शाश्वताः।।1.43।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              By these evil deeds of the destroyers of the family, which cause
              confusion of castes, the eternal religious rites of the caste and
              the family are destroyed.
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec44" className="text-xl text-center font-sans font-bold">VERSE44</h4>
            <p className="text-md text-center mt-2 font-sans">
              उत्सन्नकुलधर्माणां मनुष्याणां जनार्दन। नरकेऽनियतं वासो
              भवतीत्यनुशुश्रुम।।1.44।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              We have heard, O Janardana, that those men in whose families the
              religious practices have been destroyed are inevitably destined to
              dwell in hell for an unknown period.
            </p>
          </div>
          <div className="w-full p-10 ">
            <h4 id="sec45" className="text-xl text-center font-sans font-bold">VERSE45</h4>
            <p className="text-md text-center mt-2 font-sans">
              अहो बत महत्पापं कर्तुं व्यवसिता वयम्। यद्राज्यसुखलोभेन हन्तुं
              स्वजनमुद्यताः।।1.45।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              Alas! We are involved in a great sin, for we are prepared to kill
              our kinsmen, out of greed for the pleasures of a kingdom.
            </p>
          </div>
          <div className="w-full p-10 ">
            <h4 id="sec46" className="text-xl text-center font-sans font-bold">VERSE46</h4>
            <p className="text-md text-center mt-2 font-sans">
              यदि मामप्रतीकारमशस्त्रं शस्त्रपाणयः। धार्तराष्ट्रा रणे
              हन्युस्तन्मे क्षेमतरं भवेत्।।1.46।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              If the sons of Dhritarashtra, with weapons in hand, should slay me
              in battle, unresisting and unarmed, that would be better for me.
            </p>
          </div>
          <div className="w-full p-10">
            <h4 id="sec47" className="text-xl text-center font-sans font-bold">VERSE47</h4>
            <p className="text-md text-center mt-2 font-sans">
              सञ्जय उवाच एवमुक्त्वाऽर्जुनः संख्ये रथोपस्थ उपाविशत्। विसृज्य सशरं
              चापं शोकसंविग्नमानसः।।1.47।।
            </p>
            <p className="text-md text-center mt-2 font-sans">
              Sanjaya said, Having thus spoken in the midst of the battlefield,
              Arjuna cast away his bow and arrow and, his mind overwhelmed with
              sorrow, sat down on the seat of the chariot.
            </p>
          </div>
        </div> */}
      </div>

      {/* {listStory.map((sty, i) => {
        return (
            <div className="w-full p-10" key={i}>
            <h4 className="text-xl text-center font-sans font-bold">{sty.title}</h4>
            <p className="text-md text-center mt-2 font-sans">
              {sty.hindi}
            </p>
            <p className="text-md text-center mt-2 font-sans">
             {sty.english}
            </p>
          </div>
        );
      })} */}
 
    </div>
  );
}

// const listStory = [
//   {  title: "VERSE1", hindi: "सञ्जय उवाच एवमुक्त्वाऽर्जुनः संख्ये रथोपस्थ उपाविशत्। विसृज्य सशरं चापं शोकसंविग्नमानसः।।1.47।।", english: "Sanjaya said, Having thus spoken in the midst of the battlefield,Arjuna cast away his bow and arrow and, his mind overwhelmed with sorrow, sat down on the seat of the chariot." },
//   {  title: "VERSE1", hindi: "सञ्जय उवाच एवमुक्त्वाऽर्जुनः संख्ये रथोपस्थ उपाविशत्। विसृज्य सशरं चापं शोकसंविग्नमानसः।।1.47।।", english: "Sanjaya said, Having thus spoken in the midst of the battlefield,Arjuna cast away his bow and arrow and, his mind overwhelmed with sorrow, sat down on the seat of the chariot." },
//   {  title: "VERSE1", hindi: "सञ्जय उवाच एवमुक्त्वाऽर्जुनः संख्ये रथोपस्थ उपाविशत्। विसृज्य सशरं चापं शोकसंविग्नमानसः।।1.47।।", english: "Sanjaya said, Having thus spoken in the midst of the battlefield,Arjuna cast away his bow and arrow and, his mind overwhelmed with sorrow, sat down on the seat of the chariot." },
//   {  title: "VERSE1", hindi: "सञ्जय उवाच एवमुक्त्वाऽर्जुनः संख्ये रथोपस्थ उपाविशत्। विसृज्य सशरं चापं शोकसंविग्नमानसः।।1.47।।", english: "Sanjaya said, Having thus spoken in the midst of the battlefield,Arjuna cast away his bow and arrow and, his mind overwhelmed with sorrow, sat down on the seat of the chariot." },
//   {  title: "VERSE1", hindi: "सञ्जय उवाच एवमुक्त्वाऽर्जुनः संख्ये रथोपस्थ उपाविशत्। विसृज्य सशरं चापं शोकसंविग्नमानसः।।1.47।।", english: "Sanjaya said, Having thus spoken in the midst of the battlefield,Arjuna cast away his bow and arrow and, his mind overwhelmed with sorrow, sat down on the seat of the chariot." },
//   {  title: "VERSE1", hindi: "सञ्जय उवाच एवमुक्त्वाऽर्जुनः संख्ये रथोपस्थ उपाविशत्। विसृज्य सशरं चापं शोकसंविग्नमानसः।।1.47।।", english: "Sanjaya said, Having thus spoken in the midst of the battlefield,Arjuna cast away his bow and arrow and, his mind overwhelmed with sorrow, sat down on the seat of the chariot." },
//   {  title: "VERSE1", hindi: "सञ्जय उवाच एवमुक्त्वाऽर्जुनः संख्ये रथोपस्थ उपाविशत्। विसृज्य सशरं चापं शोकसंविग्नमानसः।।1.47।।", english: "Sanjaya said, Having thus spoken in the midst of the battlefield,Arjuna cast away his bow and arrow and, his mind overwhelmed with sorrow, sat down on the seat of the chariot." },
//   {  title: "VERSE1", hindi: "सञ्जय उवाच एवमुक्त्वाऽर्जुनः संख्ये रथोपस्थ उपाविशत्। विसृज्य सशरं चापं शोकसंविग्नमानसः।।1.47।।", english: "Sanjaya said, Having thus spoken in the midst of the battlefield,Arjuna cast away his bow and arrow and, his mind overwhelmed with sorrow, sat down on the seat of the chariot." },
//   {  title: "VERSE1", hindi: "सञ्जय उवाच एवमुक्त्वाऽर्जुनः संख्ये रथोपस्थ उपाविशत्। विसृज्य सशरं चापं शोकसंविग्नमानसः।।1.47।।", english: "Sanjaya said, Having thus spoken in the midst of the battlefield,Arjuna cast away his bow and arrow and, his mind overwhelmed with sorrow, sat down on the seat of the chariot." },
//   {  title: "VERSE1", hindi: "सञ्जय उवाच एवमुक्त्वाऽर्जुनः संख्ये रथोपस्थ उपाविशत्। विसृज्य सशरं चापं शोकसंविग्नमानसः।।1.47।।", english: "Sanjaya said, Having thus spoken in the midst of the battlefield,Arjuna cast away his bow and arrow and, his mind overwhelmed with sorrow, sat down on the seat of the chariot." },
 
// ];



const storyList = [
  {
    VERSE: "VERSE 1",
    hindi:
      "धृतराष्ट्र उवाच धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः। मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय।।1.1।।",
    english:
      "Dhritarashtra said, What did my people and the sons of Pandu do when they had assembled together, eager for battle, on the holy plain of Kurukshetra, O Sanjaya?",
  },
  {
    VERSE: "VERSE 2",
    hindi:
      "सञ्जय उवाच दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा। आचार्यमुपसङ्गम्य राजा वचनमब्रवीत्।।1.2।।",
    english:
      "Sanjaya said: Having seen the army of the Pandavas drawn up in battle array, King Duryodhana approached his teacher, Drona, and spoke these words.",
  },
  {
    VERSE: "VERSE 3",
    hindi:
      "पश्यैतां पाण्डुपुत्राणामाचार्य महतीं चमूम्। व्यूढां द्रुपदपुत्रेण तव शिष्येण धीमता।।1.3।।",
    english:
      "Behold, O Teacher! This mighty army of the sons of Pandu, arrayed by the son of Drupada, thy wise disciple.",
  }, 
  {
    VERSE: "VERSE 4",
    hindi:
      "अत्र शूरा महेष्वासा भीमार्जुनसमा युधि। युयुधानो विराटश्च द्रुपदश्च महारथः।।1.4।।",
    english:
      "Here are heroes, mighty archers, equal in battle to Bhima and Arjuna, Yuyudhana (Satyaki), Virata, and Drupada—all mighty warriors.",
  },
  {
    VERSE: "VERSE 5",
    hindi:
      "धृष्टकेतुश्चेकितानः काशिराजश्च वीर्यवान्। पुरुजित्कुन्तिभोजश्च शैब्यश्च नरपुङ्गवः।।1.5।।",
    english:
      "Dhrishtaketu, Chekitana, the valiant king of Kasi, Purujit, Kuntibhoja, and Saibya—the best of men.",
  },
  {
    VERSE: "VERSE 6",
    hindi:
      "युधामन्युश्च विक्रान्त उत्तमौजाश्च वीर्यवान्। सौभद्रो द्रौपदेयाश्च सर्व एव महारथाः।।1.6।।",
    english:
      "The strong Yudhamanyu and the brave Uttamaujas, the son of Subhadra (Abhimanyu, the son of Subhadra and Arjuna), and the sons of Draupadi, all of them great charioteers (great heroes).",
  },
  {
    VERSE: "VERSE 7",
    hindi:
      "अस्माकं तु विशिष्टा ये तान्निबोध द्विजोत्तम। नायका मम सैन्यस्य संज्ञार्थं तान्ब्रवीमि ते।।1.7।।",
    english:
      "Know also, O best among the twice-born! the names of those who are the most distinguished amongst ourselves, the leaders of my army; these I name to you for your information.",
  },
  {
    VERSE: "VERSE 8",
    hindi:
      "भवान्भीष्मश्च कर्णश्च कृपश्च समितिञ्जयः। अश्वत्थामा विकर्णश्च सौमदत्तिस्तथैव च।।1.8।।",
    english:
      "Thou thyself, Bhishma, Karna, Kripa, the victorious in war, Asvatthama, Vikarna, and Bhurisrava, the son of Somadatta—all these are ready for battle.",
  },
  {
    VERSE: "VERSE 9",
    hindi:
      "अन्ये च बहवः शूरा मदर्थे त्यक्तजीविताः। नानाशस्त्रप्रहरणाः सर्वे युद्धविशारदाः।।1.9।।",
    english:
      "And also many other heroes, ready to give up their lives for my sake, armed with various weapons and missiles, all well-skilled in battle.",
  },
  {
    id: "sec10",
    VERSE: "VERSE 10",
    hindi:
      "अपर्याप्तं तदस्माकं बलं भीष्माभिरक्षितम्। पर्याप्तं त्विदमेतेषां बलं भीमाभिरक्षितम्।।1.10।।",
    english:
      "Our army, marshalled by Bhishma, is insufficient, whereas theirs, marshalled by Bhima, is sufficient.",
  },
  {
    VERSE: "VERSE 11",
    hindi:
      "अयनेषु च सर्वेषु यथाभागमवस्थिताः। भीष्ममेवाभिरक्षन्तु भवन्तः सर्व एव हि।।1.11।।",
    english:
      "Therefore, do all of you, stationed in your respective positions in the several divisions of the army, protect Bhishma alone.",
  },
  {
    VERSE: "VERSE 12",
    hindi:
      "तस्य संजनयन्हर्षं कुरुवृद्धः पितामहः। सिंहनादं विनद्योच्चैः शङ्खं दध्मौ प्रतापवान्।।1.12।।",
    english:
      "His glorious grandsire, the oldest of the Kauravas, roared like a lion to cheer Duryodhana and blew his conch.",
  },
  {
    VERSE: "VERSE 13",
    hindi:
      "ततः शङ्खाश्च भेर्यश्च पणवानकगोमुखाः। सहसैवाभ्यहन्यन्त स शब्दस्तुमुलोऽभवत्।।1.13।।",
    english:
      "Then, suddenly, conches, kettledrums, tabors, drums, and cow horns blared forth from the Kaurava side, and the sound was tremendous.",
  },
  {
    VERSE: "VERSE 14",
    hindi:
      "ततः श्वेतैर्हयैर्युक्ते महति स्यन्दने स्थितौ। माधवः पाण्डवश्चैव दिव्यौ शङ्खौ प्रदध्मतुः।।1.14।।",
    english:
      "Then, Madhava (Krishna) and the son of Pandu (Arjuna), seated in the magnificent chariot yoked with white horses, blew divine conches.",
  },
  {
    VERSE: "VERSE 15",
    hindi:
      "पाञ्चजन्यं हृषीकेशो देवदत्तं धनंजयः। पौण्ड्रं दध्मौ महाशङ्खं भीमकर्मा वृकोदरः।।1.15।।",
    english:
      "Hrishikesha blew the Panchajanya, Arjuna blew the Devadatta, and Bhima, the wolf-bellied doer of terrible deeds, blew the great conch Paundra.",
  },
  {
    VERSE: "VERSE 16",
    hindi:
      "अनन्तविजयं राजा कुन्तीपुत्रो युधिष्ठिरः। नकुलः सहदेवश्च सुघोषमणिपुष्पकौ।।1.16।।",
    english:
      "King Yudhishthira, the son of Kunti, blew the Anantavijaya; Nakula and Sahadeva blew the Sughosha and the Manipushpaka.",
  },
  {
    VERSE: "VERSE 17",
    hindi:
      "काश्यश्च परमेष्वासः शिखण्डी च महारथः। धृष्टद्युम्नो विराटश्च सात्यकिश्चापराजितः।।1.17।।",
    english:
      "The king of Kasi, an excellent archer, Sikhandi, the mighty car-warrior, Dhrishtadyumna, Virata, and Satyaki, the unconquered.",
  },
  {
    VERSE: "VERSE 18",
    hindi:
      "द्रुपदो द्रौपदेयाश्च सर्वशः पृथिवीपते। सौभद्रश्च महाबाहुः शङ्खान्दध्मुः पृथक्पृथक्।।1.18।।",
    english:
      "Drupada and the sons of Draupadi, O Lord of the Earth, and the son of Subhadra, the mighty-armed, blew their conches each separately.",
  },
  {
    VERSE: "VERSE 19",
    hindi:
      "स घोषो धार्तराष्ट्राणां हृदयानि व्यदारयत्। नभश्च पृथिवीं चैव तुमुलो व्यनुनादयन्।।1.19।।",
    english:
      "The tumultuous sound rent the hearts of Dhritarashtra's party, reverberating through both heaven and earth.",
  },
  {
    VERSE: "VERSE 20",
    hindi:
      "अथ व्यवस्थितान् दृष्ट्वा धार्तराष्ट्रान्कपिध्वजः। प्रवृत्ते शस्त्रसंपाते धनुरुद्यम्य पाण्डवः।।1.20।।",
    english:
      "Then, seeing the people of Dhritarashtra's party standing arrayed and the discharge of weapons about to begin, Arjuna, the son of Pandu whose ensign was a monkey, took up his bow and said the following to Krishna, O Lord of the Earth.",
  },
  {
    VERSE: "VERSE 21",
    hindi:
      "अर्जुन उवाच हृषीकेशं तदा वाक्यमिदमाह महीपते। सेनयोरुभयोर्मध्ये रथं स्थापय मेऽच्युत।।1.21।।",
    english:
      "Arjuna said, 'O Krishna, place my chariot in the middle between the two armies, so that I may behold those who stand here, desirous to fight, and know with whom I must fight when the battle is about to commence.",
  },
  {
    VERSE: "VERSE 22",
    hindi:
      "यावदेतान्निरीक्षेऽहं योद्धुकामानवस्थितान्। कैर्मया सह योद्धव्यमस्मिन्रणसमुद्यमे।।1.22।।",
    english:
      "Arjuna said, O Krishna, place my chariot in the middle between the two armies, so that I may behold those who stand here, desirous to fight, and know with whom I must fight when the battle is about to commence.",
  },
  {
    VERSE: "VERSE 23",
    hindi:
      "योत्स्यमानानवेक्षेऽहं य एतेऽत्र समागताः। धार्तराष्ट्रस्य दुर्बुद्धेर्युद्धे प्रियचिकीर्षवः।।1.23।।",
    english:
      "For I desire to observe those who are assembled here to fight, wishing to please in battle the evil-minded Duryodhana—the son of Dhritarashtra.",
  },
  {
    VERSE: "VERSE 24",
    hindi:
      "संजय उवाच एवमुक्तो हृषीकेशो गुडाकेशेन भारत। सेनयोरुभयोर्मध्ये स्थापयित्वा रथोत्तमम्।।1.24।।",
    english:
      "Sanjaya said, Thus addressed by Arjuna, Krishna stationed the best of chariots, O Dhritarashtra, in the midst of the two armies.",
  },
  {
    VERSE: "VERSE 25",
    hindi:
      "भीष्मद्रोणप्रमुखतः सर्वेषां च महीक्षिताम्। उवाच पार्थ पश्यैतान्समवेतान्कुरूनिति।।1.25।।",
    english:
      "In front of Bhishma and Drona, and all the rulers of the earth, he said: O Arjuna, son of Pritha, behold these Kurus gathered together.",
  },
  {
    VERSE: "VERSE 26",
    hindi:
      "तत्रापश्यत्स्थितान्पार्थः पितृ़नथ पितामहान्। आचार्यान्मातुलान्भ्रातृ़न्पुत्रान्पौत्रान्सखींस्तथा।।1.26।।",
    english:
      "Then, Arjuna (son of Pritha) saw there (in the armies) stationed fathers, grandfathers, teachers, maternal uncles, brothers, sons, grandsons, and friends.",
  },
  {
    VERSE: "VERSE 27",
    hindi:
      "श्वशुरान्सुहृदश्चैव सेनयोरुभयोरपि। तान्समीक्ष्य स कौन्तेयः सर्वान्बन्धूनवस्थितान्।।1.27।।",
    english:
      "He saw fathers-in-law and friends in both the armies. The son of Kunti, Arjuna, seeing all those kinsmen thus standing arrayed, spoke sorrowfully, deeply filled with pity.",
  },
  {
    VERSE: "VERSE 28",
    hindi:
      "अर्जुन उवाच कृपया परयाऽऽविष्टो विषीदन्निदमब्रवीत्। दृष्ट्वेमं स्वजनं कृष्ण युयुत्सुं समुपस्थितम्।।1.28।।",
    english:
      "Arjuna said, O Krishna, seeing my kinsmen arrayed here, eager to fight,"
  },
  {
    VERSE: "VERSE 29",
    hindi:
      "सीदन्ति मम गात्राणि मुखं च परिशुष्यति। वेपथुश्च शरीरे मे रोमहर्षश्च जायते।।1.29।।",
    english:
      "My limbs fail, my mouth is parched, my body quivers, and my hair stands on end.",
  },
  {
    VERSE: "VERSE 30",
    hindi:
      "गाण्डीवं स्रंसते हस्तात्त्वक्चैव परिदह्यते। न च शक्नोम्यवस्थातुं भ्रमतीव च मे मनः।।1.30।।",
    english:
      "The Gandiva slips from my hand, and my skin burns all over; I am unable to stand, and my mind is reeling, as it were.",
  },
  {
    VERSE: "VERSE 31",
    hindi:
      "निमित्तानि च पश्यामि विपरीतानि केशव। न च श्रेयोऽनुपश्यामि हत्वा स्वजनमाहवे।।1.31।।",
    english:
      "And I see ill omens, O Kesava. I do not see any good in slaying my kinsmen in battle.",
  },
  {
    VERSE: "VERSE 32",
    hindi:
      "न काङ्क्षे विजयं कृष्ण न च राज्यं सुखानि च। किं नो राज्येन गोविन्द किं भोगैर्जीवितेन वा।।1.32।।",
    english:
      "I desire not victory, O Krishna, nor kingdom, nor pleasures. What use is dominion to us, O Krishna, or pleasures or even life?",
  },
  {
    VERSE: "VERSE 33",
    hindi:
      "येषामर्थे काङ्क्षितं नो राज्यं भोगाः सुखानि च। त इमेऽवस्थिता युद्धे प्राणांस्त्यक्त्वा धनानि च।।1.33।।",
    english:
      "Those for whose sake we desire kingdom, enjoyments, and pleasures stand here in battle, having renounced life and wealth.",
  },
  {
    VERSE: "VERSE 34",
    hindi:
      "आचार्याः पितरः पुत्रास्तथैव च पितामहाः। मातुलाः श्चशुराः पौत्राः श्यालाः सम्बन्धिनस्तथा।।1.34।।",
    english:
      "Teachers, fathers, sons, and grandfathers, maternal uncles, fathers-in-law, grandsons, brothers-in-law, and other relatives—",
  },
  {
    VERSE: "VERSE 35",
    hindi:
      "एतान्न हन्तुमिच्छामि घ्नतोऽपि मधुसूदन। अपि त्रैलोक्यराज्यस्य हेतोः किं नु महीकृते।।1.35।।",
    english:
      "These I do not wish to kill, O Krishna, even though they kill me, for the sake of dominion over the three worlds; leave alone killing them for the sake of the earth.",
  },
  {
    VERSE: "VERSE 36",
    hindi:
      "निहत्य धार्तराष्ट्रान्नः का प्रीतिः स्याज्जनार्दन। पापमेवाश्रयेदस्मान्हत्वैतानाततायिनः।।1.36।।",
    english:
      "By killing these sons of Dhritarashtra, what pleasure could be ours, O Janardana? Only sin would accrue to us from killing these felons.",
  },
  {
    VERSE: "VERSE 37",
    hindi:
      "तस्मान्नार्हा वयं हन्तुं धार्तराष्ट्रान्स्वबान्धवान्। स्वजनं हि कथं हत्वा सुखिनः स्याम माधव।।1.37।।",
    english:
      "Therefore, we should not kill the sons of Dhritarashtra, our relatives; for how can we be happy by killing our own kin, O Madhava (Krishna)?",
  },
  {
    VERSE: "VERSE 38",
    hindi:
      "यद्यप्येते न पश्यन्ति लोभोपहतचेतसः। कुलक्षयकृतं दोषं मित्रद्रोहे च पातकम्।।1.38।।",
    english:
      "Though they, with intelligence overpowered by greed, see no evil in the destruction of families and no sin in hostility to friends,",
  },
  {
    VERSE: "VERSE 39",
    hindi:
      "कथं न ज्ञेयमस्माभिः पापादस्मान्निवर्तितुम्। कुलक्षयकृतं दोषं प्रपश्यद्भिर्जनार्दन।।1.39।।",
    english:
      "Why should we not, who clearly see the evil in the destruction of families, learn to turn away from this sin, O Janardana (Krishna)?",
  },
  {
    VERSE: "VERSE 40",
    hindi:
      "कुलक्षये प्रणश्यन्ति कुलधर्माः सनातनाः। धर्मे नष्टे कुलं कृत्स्नमधर्मोऽभिभवत्युत।।1.40।।",
    english:
      "In the destruction of a family, the immemorial religious rites of that family perish; on the destruction of spirituality, impiety indeed, overwhelms the whole family.",
  },
  {
    VERSE: "VERSE 41",
    hindi:
      "अधर्माभिभवात्कृष्ण प्रदुष्यन्ति कुलस्त्रियः। स्त्रीषु दुष्टासु वार्ष्णेय जायते वर्णसङ्करः।।1.41।।",
    english:
      "O Krishna, by the prevalence of impiety, the women of the family become corrupt; and, when women are corrupted, O Varshenya (descendant of Vrishni), intermingling of castes arises.",
  },
  {
    VERSE: "VERSE 42",
    hindi:
      "सङ्करो नरकायैव कुलघ्नानां कुलस्य च। पतन्ति पितरो ह्येषां लुप्तपिण्डोदकक्रियाः।।1.42।।",
    english:
      "Confusion of castes leads to hell for the slayers of the family, for their forebears fall, deprived of the offerings of rice-balls and libations of water.",
  },
  {
    VERSE: "VERSE 43",
    hindi:
      "दोषैरेतैः कुलघ्नानां वर्णसङ्करकारकैः। उत्साद्यन्ते जातिधर्माः कुलधर्माश्च शाश्वताः।।1.43।।",
    english:
      "By these evil deeds of the destroyers of the family, which cause confusion of castes, the eternal religious rites of the caste and the family are destroyed.",
  },
  {
    VERSE: "VERSE 44",
    hindi:
      "उत्सन्नकुलधर्माणां मनुष्याणां जनार्दन। नरकेऽनियतं वासो भवतीत्यनुशुश्रुम।।1.44।।",
    english:
      "We have heard, O Janardana, that those men in whose families the religious practices have been destroyed are inevitably destined to dwell in hell for an unknown period.",
  },
  {
    VERSE: "VERSE 45",
    hindi:
      "अहो बत महत्पापं कर्तुं व्यवसिता वयम्। यद्राज्यसुखलोभेन हन्तुं स्वजनमुद्यताः।।1.45।।",
    english:
      "Alas! We are involved in a great sin, for we are prepared to kill our kinsmen, out of greed for the pleasures of a kingdom.",
  },
  {
    VERSE: "VERSE 46",
    hindi:
      "यदि मामप्रतीकारमशस्त्रं शस्त्रपाणयः। धार्तराष्ट्रा रणे हन्युस्तन्मे क्षेमतरं भवेत्।।1.46।।",
    english:
      "If the sons of Dhritarashtra, with weapons in hand, should slay me in battle, unresisting and unarmed, that would be better for me.",
  },
  {
    VERSE: "VERSE 47",
    hindi:
      "सञ्जय उवाच एवमुक्त्वाऽर्जुनः संख्ये रथोपस्थ उपाविशत्। विसृज्य सशरं चापं शोकसंविग्नमानसः।।1.47।।",
    english:
      "Sanjaya said, Having thus spoken in the midst of the battlefield, Arjuna cast away his bow and arrow and, his mind overwhelmed with sorrow, sat down on the seat of the chariot.",
  },
]