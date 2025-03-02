import React from 'react'

export default function page() {
  return (
    <div className="bg-pink-200">
       
          <div className="lg:p-10 ">
            <img className="h-[60vh] w-full rounded-xl shadow-2xl" src="https://www.shutterstock.com/image-photo/srimad-bhagavatam-rosary-close-up-600nw-2433466411.jpg" alt=""></img>
            <div className="absolute top-[43%] left-[10%]">
              <p className="xl:text-6xl md:text-5xl sm:text-3xl font-black bg-gradient-to-l from-blue-800 to-red-400 bg-clip-text text-transparent">Shreemad Bhagvatam Qoutes By Supreme Krishna</p>
            </div>

          </div>

          <div className="wraper">
          <div className="container">
            <input type="radio" name="slide" id="c1" ></input>
            <label for="c1" className="card">
              <div className="row">
                <div className="icon">1</div>
                <div className="disc">
                  <h4 className="font-bold text-sm text-red-600 mt-2">Quote 1</h4>
                  <p className="text-sm text-pink-200">Whenever dharma declines and the purpose of life is forgotten, I manifest myself on earth. I am born in every age to protect the good, to destroy evil, 
                    and to reestablish dharma.</p>
                </div>
              </div>
            </label>

            <input type="radio" name="slide" id="c2" ></input>
            <label for="c2" className="card">
              <div className="row">
                <div className="icon">2</div>
                <div className="disc">
                  <h4 className="font-bold text-sm text-red-600 mt-2">Quote 2</h4>
                  <p className="text-sm text-pink-200">As they approach me, so I receive them. All paths, Arjuna, lead to me.</p>
                </div>
              </div>
            </label>

            <input type="radio" name="slide" id="c3" ></input>
            <label for="c3" className="card">
              <div className="row">
                <div className="icon">3</div>
                <div className="disc">
                  <h4 className="font-bold text-sm text-red-600 mt-2">Quote 3</h4>
                  <p className="text-sm text-pink-200">I am the beginning, middle, and end of creation.</p>
                </div>
              </div>
            </label>

            <input type="radio" name="slide" id="c4" ></input>
            <label for="c4" className="card">
              <div className="row">
                <div className="icon">4</div>
                <div className="disc">
                  <h4 className="font-bold text-sm text-red-600 mt-2">Quote 4</h4>
                  <p className="text-sm text-pink-200">I am death, which overcomes all, and the source of all beings still to be born.</p>
                </div>
              </div>
            </label>

            <input type="radio" name="slide" id="c5" ></input>
            <label for="c5" className="card">
              <div className="row">
                <div className="icon">5</div>
                <div className="disc">
                  <h4 className="font-bold text-sm text-red-600 mt-2">Quote 5</h4>
                  <p className="text-sm text-pink-200">Just remember that I am, and that I support the entire cosmos with only a fragment of my being.</p>
                </div>
              </div>
            </label>

          </div>
          
          
          
          </div>

    
    </div>
  )
}
