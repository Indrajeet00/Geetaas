import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-orange-100">
     <div className="relative">
      <video className="w-full" width="320" height="240" controls={false} muted loop autoPlay>
      <source src="https://www.shutterstock.com/shutterstock/videos/3527035171/preview/stock-footage-krishna-hindu-god-from-india-watercolour-mythology-krishna-animation-video.webm" type="video/webm" />
     
    </video>
    <div className="absolute top-[26%] left-[18%]">
      <h1 className="xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl font-bold font-sans bg-gradient-to-l from-pink-500 to-gray-300 bg-clip-text text-transparent">Experience the Glory
        <br></br> of Geeta</h1>
      <h1 className="xl:text-5xl md:text-4xl sm:text-3xl font-semibold font-sans text-yellow-500">Feel the Life Anywhere</h1>
      
    </div>
    <div className="absolute lg:block hidden top-[65%] left-[40%]">
      <button className="w-28 lg:text-xs font-black font-sans text-gray-500 bg-pink-200 p-3 rounded-full ">Read Now</button>
      </div>

     </div>
     <div className="lg:hidden block p-2">
      <button className="w-full text-xs font-black font-sans text-gray-500 bg-pink-200 p-3 rounded-full">Read Now</button>
      </div>
     
     <div className="w-full bg-gradient-to-l from-pink-200 to-gray-200 bg-clip-bg bg-transparent p-10">
      <h1 className="text-4xl text-gray-700 font-sans font-semibold text-center">Have the Shloka of the Day delivered to your <br></br> inbox each morning</h1>
      <div className="flex gap-9 p-6 justify-center">
      <input type="text" placeholder="Enter Your Name" className="input input-bordered w-full max-w-xs p-3 rounded-lg" />
      <input type="text" placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs p-3 rounded-lg" />
      <button className="w-32 text-sm text-gray-700 p-2 bg-pink-300 rounded-full">Subscribe</button>
      </div>

     </div>

     <div className="w-full mt-10 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-sans font-bold text-center text-gray-700">Journey of the Self</h1>
      <h4 className="text-xl font-sans font-medium text-gray-700 text-center mt-3">Chapters</h4>
      <img className="h-[28vh] w-[20vw]" src="https://png.pngtree.com/png-vector/20220814/ourmid/pngtree-krishna-flute-png-with-peacock-feather-png-image_6110420.png" alt=""></img>
     </div>

     <div className="flex flex-col justify-center items-center p-7">
      <img className="rounded-full autoRotate" src="https://e7.pngegg.com/pngimages/912/541/png-clipart-vintage-round-brown-carriage-wheel-konark-sun-temple-hindu-temple-chariot-chakra-india-chariot-thumbnail.png" alt=""></img>

      <div className="flex flex-col-1 gap-2">
      <h1 className="text-5xl font-bold font-sans text-yellow-600 mt-6 autoShow">AramBham</h1>
      <img className="h-12 w-12 rounded-full mt-6 autoShow" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWFLKgWY4qWMyEWB5gRPHOJ3RRAnPbHE-U1Q&s" alt=""></img>
      </div>
     </div>

     <div className="lg:flex block justify-around p-5 mt-5">
     <div className="p-5 lg:w-[50vw] w-full autoShow">
      <p className="text-md text-center">Chapter 1</p>
      <div className="flex flex-row justify-center">
      <img className="h-12 w-12" src="https://png.pngtree.com/png-vector/20240227/ourmid/pngtree-transparent-peacock-feather-image-png-image_11880780.png" alt=""></img>
      <h1 className="text-3xl font-sans font-bold mt-4 text-center bg-gradient-to-l from-pink-500 to-gray-300 bg-clip-text text-transparent">Arjuna Visada Yoga</h1>
      <img className="h-12 w-12" src="https://png.pngtree.com/png-vector/20240227/ourmid/pngtree-transparent-peacock-feather-image-png-image_11880780.png" alt=""></img>
      </div>
      <p className="text-sm mt-3 ">The first chapter of the Bhagavad Gita - "Arjuna Vishada Yoga" introduces the setup, the setting, 
        the characters and the circumstances that led to the epic battle of Mahabharata, fought between the 
        Pandavas and the Kauravas. It outlines the reasons that led to the revelation of the of Bhagavad Gita.
        As both armies stand ready for the battle, the mighty warrior Arjuna, on observing the warriors on both
        sides becomes increasingly sad and depressed due to the fear of losing his relatives and friends and the
        consequent sins attributed to killing his own relatives. So, he surrenders to Lord Krishna, seeking a
        solution. Thus, follows the wisdom of the Bhagavad Gita.</p>
     </div>
     <div className="autoShow">
      <img className="lg:rounded-full h-72 lg:w-96 w-full " src="https://cdn.wallpapersafari.com/59/60/74h20F.jpg" alt=""></img>
     </div>
     </div>

     <div className="lg:flex block justify-around p-5 mt-5">
     <div className="autoShow">
      <img className="lg:rounded-full h-72 lg:w-96 w-full" src="https://w0.peakpx.com/wallpaper/153/84/HD-wallpaper-krishna-arjun-god-govind-kanha-lord-lord-krishna-mahabharat-shree-krishna-shri-krishna-thumbnail.jpg" alt=""></img>
     </div>

     <div className="p-5 lg:w-[50vw] w-full autoShow">
      <p className="text-md text-center">Chapter 2</p>
      <div className="flex flex-row justify-center">
      <img className="h-12 w-12" src="https://png.pngtree.com/png-vector/20240227/ourmid/pngtree-transparent-peacock-feather-image-png-image_11880780.png" alt=""></img>
      <h1 className="text-3xl font-sans font-bold mt-4 text-center bg-gradient-to-l from-pink-500 to-gray-300 bg-clip-text text-transparent">Sankhya Yoga</h1>
      <img className="h-12 w-12" src="https://png.pngtree.com/png-vector/20240227/ourmid/pngtree-transparent-peacock-feather-image-png-image_11880780.png" alt=""></img>
      </div>
      <p className="text-sm mt-3 ">The second chapter of the Bhagavad Gita is Sankhya Yoga. This chapter is the most important 
        chapter of the Bhagavad Gita as in it Lord Krishna condenses the teachings of the entire Gita. This chapter is the 
        essence of the entire Gita. Sankhya Yoga can be classified into 4 main topics – 1. Arjuna completely 
        surrendering to Lord Krishna and accepting Him as his Guru. 2. Explanation of the main cause of all 
        suffering, which is ignorance of the true nature of the Self. 3. Karmayoga – the discipline of selfless 
        action without being attached to the fruits of one’s actions. 4. Description of a perfect man – one
        whose mind is steady and one-pointed.</p>
     </div>
     
     </div>

     <div className="lg:flex block justify-around p-5 mt-5">
     <div className="p-5 lg:w-[50vw] w-full autoShow">
      <p className="text-md text-center">Chapter 3</p>
      <div className="flex flex-row justify-center">
      <img className="h-12 w-12" src="https://png.pngtree.com/png-vector/20240227/ourmid/pngtree-transparent-peacock-feather-image-png-image_11880780.png" alt=""></img>
      <h1 className="text-3xl font-sans font-bold mt-4 text-center bg-gradient-to-l from-pink-500 to-gray-300 bg-clip-text text-transparent">Karma Yoga</h1>
      <img className="h-12 w-12" src="https://png.pngtree.com/png-vector/20240227/ourmid/pngtree-transparent-peacock-feather-image-png-image_11880780.png" alt=""></img>
      </div>
      <p className="text-sm mt-3 ">The third chapter of the Bhagavad Gita is "Karma Yoga" or the "Path of Selfless Service".
         Here Lord Krishna emphasizes the importance of karma in life. He reveals that it is important for every 
         human being to engage in some sort of activity in this material world. Further, he describes the kinds of 
         actions that lead to bondage and the kinds that lead to liberation. Those persons who continue to perform 
         their respective duties externally for the pleasure of the Supreme, without attachment to its rewards get
         liberation at the end.</p>
     </div>
     <div className="autoShow">
      <img className="lg:rounded-full h-72 lg:w-96 w-full" src="https://asanaathome.com/wp-content/uploads/2023/12/bhagavad-gita-quotes-on-positive-thinking-1.jpeg" alt=""></img>
     </div>
     </div>

     <div className="lg:flex block justify-around p-5 mt-5">
     <div className="autoShow">
      <img className="lg:rounded-full h-72 lg:w-96 w-full" src="https://media.licdn.com/dms/image/D4E12AQGxCCvpe5-qzw/article-cover_image-shrink_600_2000/0/1708893797882?e=2147483647&v=beta&t=5Ab6vvd53TPshOtvTxatz9qVuexMXdNpHcPgKV0P0NI" alt=""></img>
     </div>
     
     <div className="p-5 lg:w-[50vw] w-full autoShow">
      <p className="text-md text-center">Chapter 4</p>
      <div className="flex flex-row justify-center">
      <img className="h-12 w-12" src="https://png.pngtree.com/png-vector/20240227/ourmid/pngtree-transparent-peacock-feather-image-png-image_11880780.png" alt=""></img>
      <h1 className="text-3xl font-sans font-bold mt-4 text-center bg-gradient-to-l from-pink-500 to-gray-300 bg-clip-text text-transparent">Janana Karma Sanyasa Yoga</h1>
      <img className="h-12 w-12" src="https://png.pngtree.com/png-vector/20240227/ourmid/pngtree-transparent-peacock-feather-image-png-image_11880780.png" alt=""></img>
      </div>
      <p className="text-sm mt-3 ">The fourth chapter of the Bhagavad Gita is "Jnana Karma Sanyasa Yoga".
         In this chapter, Krishna glorifies the Karma Yoga and imparts the Transcendental Knowledge 
         (the knowledge of the soul and the Ultimate Truth) to Arjuna. He reveals the reason behind his
          appearance in this material world. He reveals that even though he is eternal, he reincarnates 
          time after time to re-establish dharma and peace on this Earth. His births and activities are 
          eternal and are never contaminated by material flaws. Those persons who know and understand this 
          Truth engage in his devotion with full faith and eventually attain Him. They do not have to take 
          birth in this world again.</p>
     </div>
     
     </div>

     <div className="lg:flex block justify-around p-5 mt-5">
     <div className="p-5 lg:w-[50vw] w-full autoShow">
      <p className="text-md text-center">Chapter 5</p>
      <div className="flex flex-row justify-center">
      <img className="h-12 w-12" src="https://png.pngtree.com/png-vector/20240227/ourmid/pngtree-transparent-peacock-feather-image-png-image_11880780.png" alt=""></img>
      <h1 className="text-3xl font-sans font-bold mt-4 text-center bg-gradient-to-l from-pink-500 to-gray-300 bg-clip-text text-transparent">Karma Sanyasa Yoga</h1>
      <img className="h-12 w-12" src="https://png.pngtree.com/png-vector/20240227/ourmid/pngtree-transparent-peacock-feather-image-png-image_11880780.png" alt=""></img>
      </div>
      <p className="text-sm mt-3 ">The fifth chapter of the Bhagavad Gita is "Karma Sanyasa Yoga". In this 
        chapter, Krishna compares the paths of renunciation in actions (Karma Sanyas) and actions with 
        detachment (Karma Yoga) and explains that both are means to reach the same goal and we can choose either.
        A wise person should perform his/her worldly duties without attachment to the fruits of his/her actions 
        and dedicate them to God. This way they remain unaffected by sin and eventually attain liberation.</p>
     </div>
     <div className="autoShow">
      <img className="lg:rounded-full h-72 lg:w-96 w-full" src="https://images.playground.com/c69c3a4b24b64b6f9c7b4bb557cb9c02.jpeg" alt=""></img>
     </div>
     </div>

     <div className="lg:flex block justify-around p-5 mt-5">
     <div className="autoShow">
      <img className="lg:rounded-full h-64 lg:w-96 w-full mt-3" src="https://blog.cdn.level.game/2024/05/how-to-control-mind-bhagavad-gita.webp" alt=""></img>
     </div>
     
     <div className="p-5 lg:w-[50vw] w-full autoShow">
      <p className="text-md text-center">Chapter 6</p>
      <div className="flex flex-row justify-center">
      <img className="h-12 w-12" src="https://png.pngtree.com/png-vector/20240227/ourmid/pngtree-transparent-peacock-feather-image-png-image_11880780.png" alt=""></img>
      <h1 className="text-3xl font-sans font-bold mt-4 text-center bg-gradient-to-l from-pink-500 to-gray-300 bg-clip-text text-transparent">Dhyana Yoga</h1>
      <img className="h-12 w-12" src="https://png.pngtree.com/png-vector/20240227/ourmid/pngtree-transparent-peacock-feather-image-png-image_11880780.png" alt=""></img>
      </div>
      <p className="text-sm mt-3 ">The sixth chapter of the Bhagavad Gita is "Dhyana Yoga". In this chapter, Krishna reveals the "Yoga of
         Meditation" and how to practise this Yoga. He discusses the role of action in preparing for Meditation, 
         how performing duties in devotion purifies one's mind and heightens one's spiritual consciousness.
         He explains in detail the obstacles that one faces when trying to control their mind and the exact
         methods by which one can conquer their mind. He reveals how one can focus their mind on Paramatma and 
         unite with the God.</p>
     </div>
     
     </div>

     <div className="lg:flex block justify-around p-5 mt-5">
     <div className="p-5 lg:w-[50vw] w-full autoShow">
      <p className="text-md text-center">Chapter 7</p>
      <div className="flex flex-row justify-center">
      <img className="h-12 w-12" src="https://png.pngtree.com/png-vector/20240227/ourmid/pngtree-transparent-peacock-feather-image-png-image_11880780.png" alt=""></img>
      <h1 className="text-3xl font-sans font-bold mt-4 text-center bg-gradient-to-l from-pink-500 to-gray-300 bg-clip-text text-transparent">Gyan Vigyana Yoga</h1>
      <img className="h-12 w-12" src="https://png.pngtree.com/png-vector/20240227/ourmid/pngtree-transparent-peacock-feather-image-png-image_11880780.png" alt=""></img>
      </div>
      <p className="text-sm mt-3 ">The seventh chapter of the Bhagavad Gita is "Gyaan Vigyana Yoga ". 
        In this chapter, Krishna reveals that he is the Supreme Truth, the principal cause and the sustaining 
        force of everything. He reveals his illusionary energy in this material world called Maya, which is very
        difficult to overcome but those who surrender their minds unto Him attain Him easily. He also describes
        the four types of people who surrender to Him in devotion and the four kinds that don't. Krishna 
        confirms that He is the Ultimate Reality and those who realize this Truth reach the pinnacle of 
        spiritual realization and unite with the Lord.</p>
     </div>
     <div className="autoShow">
      <img className="lg:rounded-full h-72 lg:w-96 w-full" src="https://blog.cdn.level.game/2024/05/lord-krishna-meditation-in-bhagavad-gita.webp" alt=""></img>
     </div>
     </div>

     <div className="lg:flex block justify-around p-5 mt-5">
     <div className="autoShow">
      <img className="lg:rounded-full h-64 lg:w-96 w-full" src="https://pics.craiyon.com/2023-10-29/477dbc7304fe47778a50881753ca8950.webp" alt=""></img>
     </div>
     
     <div className="p-5 lg:w-[50vw] w-full autoShow">
      <p className="text-md text-center">Chapter 8</p>
      <div className="flex flex-row justify-center">
      <img className="h-12 w-12" src="https://png.pngtree.com/png-vector/20240227/ourmid/pngtree-transparent-peacock-feather-image-png-image_11880780.png" alt=""></img>
      <h1 className="text-3xl font-sans font-bold mt-4 text-center bg-gradient-to-l from-pink-500 to-gray-300 bg-clip-text text-transparent">Akshara Brahma Yoga</h1>
      <img className="h-12 w-12" src="https://png.pngtree.com/png-vector/20240227/ourmid/pngtree-transparent-peacock-feather-image-png-image_11880780.png" alt=""></img>
      </div>
      <p className="text-sm mt-3 ">The eighth chapter of the Bhagavad Gita is "Akshara Brahma Yoga". In this
         chapter, Krishna reveals the importance of the last thought before death. If we can remember Krishna 
         at the time of death, we will certainly attain him. Thus, it is very important to be in constant 
         awareness of the Lord at all times, thinking of Him and chanting His names at all times. By perfectly 
         absorbing their mind in Him through constant devotion, one can go beyond this material existence to
         Lord's Supreme abode.</p>
     </div>
     
     </div>

     <div className="lg:flex block justify-around p-5 mt-5">
     <div className="p-5 lg:w-[50vw] w-full autoShow">
      <p className="text-md text-center">Chapter 9</p>
      <div className="flex flex-row justify-center">
      <img className="h-12 w-12" src="https://png.pngtree.com/png-vector/20240227/ourmid/pngtree-transparent-peacock-feather-image-png-image_11880780.png" alt=""></img>
      <h1 className="text-3xl font-sans font-bold mt-4 text-center bg-gradient-to-l from-pink-500 to-gray-300 bg-clip-text text-transparent">Raja Vidya Yoga</h1>
      <img className="h-12 w-12" src="https://png.pngtree.com/png-vector/20240227/ourmid/pngtree-transparent-peacock-feather-image-png-image_11880780.png" alt=""></img>
      </div>
      <p className="text-sm mt-3 ">The ninth chapter of the Bhagavad Gita is "Raja Vidya Yoga". In this chapter,
         Krishna explains that He is Supreme and how this material existence is created, maintained and destroyed
         by His Yogmaya and all beings come and go under his supervision. He reveals the Role and the Importance
         of Bhakti (transcendental devotional service) towards our Spiritual Awakening. In such devotion, one 
         must live for the God, offer everything that he possesses to Him and do everything for Him only. 
         One who follows such devotion becomes free from the bonds of this material world and unites with 
         the Lord.</p>
     </div>
     <div className="autoShow">
      <img className="lg:rounded-full h-64 lg:w-96 w-full mt-4" src="https://i.pinimg.com/236x/e9/08/6e/e9086ea865f7bda96f48c1f043da9ad5.jpg" alt=""></img>
     </div>
     </div>

     <div className="lg:flex block justify-around p-5 mt-5">
     <div className="autoShow">
      <img className="lg:rounded-full h-64 lg:w-96 w-full" src="https://e0.pxfuel.com/wallpapers/482/172/desktop-wallpaper-deep-dream-instagram-collect-krishna-universe.jpg" alt=""></img>
     </div>
     
     <div className="p-5 lg:w-[50vw] w-full autoShow">
      <p className="text-md text-center">Chapter 10</p>
      <div className="flex flex-row justify-center">
      <img className="h-12 w-12" src="https://png.pngtree.com/png-vector/20240227/ourmid/pngtree-transparent-peacock-feather-image-png-image_11880780.png" alt=""></img>
      <h1 className="text-3xl font-sans font-bold mt-4 text-center bg-gradient-to-l from-pink-500 to-gray-300 bg-clip-text text-transparent">Vibhooti Yoga</h1>
      <img className="h-12 w-12" src="https://png.pngtree.com/png-vector/20240227/ourmid/pngtree-transparent-peacock-feather-image-png-image_11880780.png" alt=""></img>
      </div>
      <p className="text-sm mt-3 ">The tenth chapter of the Bhagavad Gita is "Vibhooti Yoga". In this chapter,
         Krishna reveals Himself as the cause of all causes. He describes His various manifestations and 
         opulences in order to increase Arjuna's Bhakti. Arjuna is fully convinced of Lord's paramount
         position and proclaims him to be the Supreme Personality. He prays to Krishna to describe more 
         of His divine glories which are like nectar to hear.</p>
     </div>
     
     </div>

     <div className="lg:flex block justify-around p-5 mt-5">
     <div className="p-5 lg:w-[50vw] w-full autoShow">
      <p className="text-md text-center">Chapter 11</p>
      <div className="flex flex-row justify-center">
      <img className="h-12 w-12" src="https://png.pngtree.com/png-vector/20240227/ourmid/pngtree-transparent-peacock-feather-image-png-image_11880780.png" alt=""></img>
      <h1 className="text-3xl font-sans font-bold mt-4 text-center bg-gradient-to-l from-pink-500 to-gray-300 bg-clip-text text-transparent">Vishwaroopa Darshana Yoga</h1>
      <img className="h-12 w-12" src="https://png.pngtree.com/png-vector/20240227/ourmid/pngtree-transparent-peacock-feather-image-png-image_11880780.png" alt=""></img>
      </div>
      <p className="text-sm mt-3 ">The eleventh chapter of the Bhagavad Gita is "Vishwaroopa Darshana Yoga". In this chapter,
         Arjuna requests Krishna to reveal His Universal Cosmic Form that encompasses all the universes,
        the entire existence. Arjuna is granted divine vision to be able to see the entirety of creation
        in the body of the Supreme Lord Krishna.</p>
     </div>
     <div className="autoShow">
      <img className="lg:rounded-full h-64 lg:w-96 w-full" src="https://i.pinimg.com/originals/b6/4d/46/b64d46b2973ca9ab231fddb64fb823ea.jpg" alt=""></img>
     </div>
     </div>

     <div className="lg:flex block justify-around p-5 mt-5">
     <div className="autoShow">
      <img className="lg:rounded-full h-72 lg:w-96 w-full" src="https://64.media.tumblr.com/9d6606e5fdacaba38c161814b06f5cda/a5d1021312769aa9-e8/s500x750/9f117f3126603e8ead938e3236ed9a4a1fe68aea.jpg" alt=""></img>
     </div>
     
     <div className="p-5 lg:w-[50vw] w-full autoShow">
      <p className="text-md text-center">Chapter 12</p>
      <div className="flex flex-row justify-center">
      <img className="h-12 w-12" src="https://png.pngtree.com/png-vector/20240227/ourmid/pngtree-transparent-peacock-feather-image-png-image_11880780.png" alt=""></img>
      <h1 className="text-3xl font-sans font-bold mt-4 text-center bg-gradient-to-l from-pink-500 to-gray-300 bg-clip-text text-transparent">Bhakti Yoga</h1>
      <img className="h-12 w-12" src="https://png.pngtree.com/png-vector/20240227/ourmid/pngtree-transparent-peacock-feather-image-png-image_11880780.png" alt=""></img>
      </div>
      <p className="text-sm mt-3 ">The twelfth chapter of the Bhagavad Gita is "Bhakti Yoga". In this chapter,
         Krishna emphasizes the superiority of Bhakti Yoga (the path of devotion) over all other types of 
         spiritual disciplines and reveals various aspects of devotion. He further explains that the devotees
         who perform pure devotional service to Him, with their consciousness, merged in Him and all their 
         actions dedicated to Him, are quickly liberated from the cycle of life and death. He also describes
         the various qualities of the devotees who are very dear to Him.</p>
     </div>
     
     </div>

     <div className="lg:flex block justify-around p-5 mt-5">
     <div className="p-5 lg:w-[50vw] w-full autoShow">
      <p className="text-md text-center">Chapter 13</p>
      <div className="flex flex-row justify-center">
      <img className="h-12 w-12" src="https://png.pngtree.com/png-vector/20240227/ourmid/pngtree-transparent-peacock-feather-image-png-image_11880780.png" alt=""></img>
      <h1 className="text-3xl font-sans font-bold mt-4 text-center bg-gradient-to-l from-pink-500 to-gray-300 bg-clip-text text-transparent">Ksetra Ksetrajna Vibhaaga Yoga</h1>
      <img className="h-12 w-12" src="https://png.pngtree.com/png-vector/20240227/ourmid/pngtree-transparent-peacock-feather-image-png-image_11880780.png" alt=""></img>
      </div>
      <p className="text-sm mt-3 ">The thirteenth chapter of the Bhagavad Gita is "Ksetra Ksetrajna Vibhaaga
         Yoga". The word "kshetra" means "the field", and the "kshetrajna" means "the knower of the field".
          We can think of our material body as the field and our immortal soul as the knower of the field.
          In this chapter, Krishna discriminates between the physical body and the immortal soul. He explains 
          that the physical body is temporary and perishable whereas the soul is permanent and eternal. The 
          physical body can be destroyed but the soul can never be destroyed. The chapter then describes God, 
          who is the Supreme Soul. All the individual souls have originated from the Supreme Soul. One who 
          clearly understands the difference between the body, the Soul and the Supreme Soul attains the r
          ealization of Brahman.</p>
     </div>
     <div className="autoShow">
      <img className="lg:rounded-full h-72 lg:w-96 w-full mt-4" src="https://preview.redd.it/lord-krishna-giving-bhagwad-geeta-gyan-to-arjun-v0-efkp0tziymnc1.jpeg?auto=webp&s=dc6b87c15446446e4a973a27a47f3c8673e6d239" alt=""></img>
     </div>
     </div>

     <div className="lg:flex block justify-around p-5 mt-5">
     <div className="autoShow">
      <img className="lg:rounded-full h-72 lg:w-96 w-full" src="https://media.licdn.com/dms/image/v2/D4D22AQELIKAkxy5g8g/feedshare-shrink_800/feedshare-shrink_800/0/1703218089880?e=2147483647&v=beta&t=pBNPumouWsFVZdfAlI9JJ-lRxFxHj4lrn3ZMaXZF1qM" alt=""></img>
     </div>
     
     <div className="p-5 lg:w-[50vw] w-full autoShow">
      <p className="text-md text-center">Chapter 14</p>
      <div className="flex flex-row justify-center">
      <img className="h-12 w-12" src="https://png.pngtree.com/png-vector/20240227/ourmid/pngtree-transparent-peacock-feather-image-png-image_11880780.png" alt=""></img>
      <h1 className="text-3xl font-sans font-bold mt-4 text-center bg-gradient-to-l from-pink-500 to-gray-300 bg-clip-text text-transparent">Gunatraya Vibhaga Yoga</h1>
      <img className="h-12 w-12" src="https://png.pngtree.com/png-vector/20240227/ourmid/pngtree-transparent-peacock-feather-image-png-image_11880780.png" alt=""></img>
      </div>
      <p className="text-sm mt-3 ">The fourteenth chapter of the Bhagavad Gita is "Gunatraya Vibhaga Yoga".
         In this chapter, Krishna reveals the three gunas (modes) of the material nature - goodness,
         passion and ignorance which everything in the material existence is influenced by. He further
         explains the essential characteristics of each of these modes, their cause and how they influence
         a living entity affected by them. He then reveals the various characteristics of the persons who Have
         gone beyond these gunas. The chapter ends with Krishna reminding us of the power of pure devotion to 
         God and how attachment to God can help us transcend these gunas.</p>
     </div>
     
     </div>

     <div className="lg:flex block justify-around p-5 mt-5">
     <div className="p-5 lg:w-[50vw] w-full autoShow">
      <p className="text-md text-center">Chapter 15</p>
      <div className="flex flex-row justify-center">
      <img className="h-12 w-12" src="https://png.pngtree.com/png-vector/20240227/ourmid/pngtree-transparent-peacock-feather-image-png-image_11880780.png" alt=""></img>
      <h1 className="text-3xl font-sans font-bold mt-4 text-center bg-gradient-to-l from-pink-500 to-gray-300 bg-clip-text text-transparent">Puroshottama Yoga</h1>
      <img className="h-12 w-12" src="https://png.pngtree.com/png-vector/20240227/ourmid/pngtree-transparent-peacock-feather-image-png-image_11880780.png" alt=""></img>
      </div>
      <p className="text-sm mt-3 ">The fifteenth chapter of the Bhagavad Gita is "Purushottama Yoga". In Sanskrit,
         Purusha means the "All-pervading God", and Purushottam means the timeless & transcendental aspect of God.
          Krishna reveals that the purpose of this Transcendental knowledge of the God is to detach ourselves from 
          the bondage of the material world and to understand Krishna as the Supreme Divine Personality, who is 
          the eternal controller and sustainer of the world. One who understands this Ultimate Truth surrenders 
          to Him and engages in His devotional service.</p>
     </div>
     <div className="autoShow">
      <img className="lg:rounded-full h-72 lg:w-96 w-full" src="https://miro.medium.com/v2/resize:fit:1200/1*eQ7OFZhQ8sVeCGMWRaPN-A.png" alt=""></img>
     </div>
     </div>

     <div className="lg:flex block justify-around p-5 mt-5">
     <div className="autoShow">
      <img className="lg:rounded-full h-72 lg:w-96 w-full" src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/ab2bca6a-1078-40af-b8b4-a558e1d64813/0cb141bd-32a5-4f35-8cc6-684b886a6bc8.png" alt=""></img>
     </div>
     
     <div className="p-5 lg:w-[50vw] w-full autoShow">
      <p className="text-md text-center">Chapter 16</p>
      <div className="flex flex-row justify-center">
      <img className="h-12 w-12" src="https://png.pngtree.com/png-vector/20240227/ourmid/pngtree-transparent-peacock-feather-image-png-image_11880780.png" alt=""></img>
      <h1 className="text-3xl font-sans font-bold mt-4 text-center bg-gradient-to-l from-pink-500 to-gray-300 bg-clip-text text-transparent">Daivasura Sampad Vibhaga Yoga</h1>
      <img className="h-12 w-12" src="https://png.pngtree.com/png-vector/20240227/ourmid/pngtree-transparent-peacock-feather-image-png-image_11880780.png" alt=""></img>
      </div>
      <p className="text-sm mt-3 ">The sixteenth chapter of the Bhagavad Gita is "Daivasura Sampad Vibhaga Yoga".
         In this chapter, Krishna describes explicitly the two kinds of natures among human beings - divine 
         and demoniac. Those who possess demonaic qualities associate themselves with the modes of passion 
         and ignorance do not follow the regulations of the scriptures and embrace materialistic views.
         These people attain lower births and further material bondage. But people who possess divine qualities, 
         follow the instructions of the scriptures, associate themselves with the mode of goodness and purify the 
         mind through spiritual practices. This leads to the enhancement of divine qualities and they eventually
         attain spiritual realization.</p>
     </div>
     
     </div>

     <div className="lg:flex block justify-around p-5 mt-5">
     <div className="p-5 lg:w-[50vw] w-full autoShow">
      <p className="text-md text-center">Chapter 17</p>
      <div className="flex flex-row justify-center">
      <img className="h-12 w-12" src="https://png.pngtree.com/png-vector/20240227/ourmid/pngtree-transparent-peacock-feather-image-png-image_11880780.png" alt=""></img>
      <h1 className="text-3xl font-sans font-bold mt-4 text-center bg-gradient-to-l from-pink-500 to-gray-300 bg-clip-text text-transparent">Sraddhatraya Vibhaga Yoga</h1>
      <img className="h-12 w-12" src="https://png.pngtree.com/png-vector/20240227/ourmid/pngtree-transparent-peacock-feather-image-png-image_11880780.png" alt=""></img>
      </div>
      <p className="text-sm mt-3 ">The seventeenth chapter of the Bhagavad Gita is "Sraddhatraya Vibhaga Yoga".
         In this chapter, Krishna describes the three types of faith corresponding to the three modes of 
         the material nature. Lord Krishna further reveals that it is the nature of faith that determines 
         the quality of life and the character of living entities. Those who have faith in passion and 
         ignorance perform actions that yield temporary, material results while those who have faith in
         goodness perform actions in accordance with scriptural instructions and hence their hearts get
         further purified.</p>
     </div>
     <div className="autoShow">
      <img className="lg:rounded-full h-72 lg:w-96 w-full" src="https://sadhgamaya.in/wp-content/uploads/2024/03/sadhgamaya.in-6.png" alt=""></img>
     </div>
     </div>

     <div className="lg:flex block justify-around p-3 mt-5 pb-10">
     <div className="autoShow">
      <img className="lg:rounded-full h-72 lg:w-96 w-full mt-8 " src="https://qph.cf2.quoracdn.net/main-qimg-d736153df4632c9e5c63880467d7ff36" alt=""></img>
     </div>
     
     <div className="p-5 lg:w-[55vw] w-full autoShow">
      <p className="text-md text-center">Chapter 18</p>
      <div className="flex flex-row justify-center">
      <img className="h-12 w-12" src="https://png.pngtree.com/png-vector/20240227/ourmid/pngtree-transparent-peacock-feather-image-png-image_11880780.png" alt=""></img>
      <h1 className="text-3xl font-sans font-bold mt-4 text-center bg-gradient-to-l from-pink-500 to-gray-300 bg-clip-text text-transparent">Moksha Sanyaas Yoga</h1>
      <img className="h-12 w-12" src="https://png.pngtree.com/png-vector/20240227/ourmid/pngtree-transparent-peacock-feather-image-png-image_11880780.png" alt=""></img>
      </div>
      <p className="text-sm mt-3">The eighteenth chapter of the Bhagavad Gita is "Moksha Sanyas Yoga".
         Arjuna requests the Lord to explain the difference between the two types of renunciations - 
         sanyaas(renunciation of actions) and tyaag(renunciation of desires). Krishna explains that 
         a sanyaasi is one who abandons family and society in order to practise spiritual discipline 
         whereas a tyaagi is one who performs their duties without attachment to the rewards of their
         actions and dedicating them to the God. Krishna recommends the second kind of renunciation -
         tyaag. Krishna then gives a detailed analysis of the effects of the three modes of material 
         nature. He declares that the highest path of spirituality is pure, unconditional loving service 
         unto the Supreme Divine Personality, Krishna. If we always remember Him, keep chanting His name
         and dedicate all our actions unto Him, take refuge in Him and make Him our Supreme goal, then by 
         His grace, we will surely overcome all obstacles and difficulties and be freed from this cycle of 
         birth and death.</p>
     </div>
     
     </div>

    </main>
  );
}
