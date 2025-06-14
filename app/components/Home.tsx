"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Asterisk, ChevronDown } from "lucide-react";
import { useRef } from "react";
import ColorCircles from "./ColorCircles";
import { Link, Element } from 'react-scroll';

export default function Home() {
  
    const secondBlockRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<HTMLDivElement>(null);
  
    return (
      <div className="min-h-screen">
        <div className="first-content flex flex-col justify-center items-center h-screen relative">
          <div className="cormorant text-white">
            <div className="hidden md:block">
              <div className="flex flex-row gap-6 lg:gap-12 items-center text-center">
                <div className="text-7xl lg:text-9xl">
                  Александр
                </div>
                <div className="text-3xl lg:text-5xl mt-8 lg:mt-11">
                  Мы женимся
                </div>
              </div>
    
              <div className="flex flex-row gap-6 lg:gap-12 items-center">
                <div>
                  <span className="text-3xl lg:text-5xl px-4 lg:px-6 py-1 lg:py-2">
                    20 | 06 | 25
                  </span>
                </div>
                <div>
                  <span className="text-7xl lg:text-9xl">
                    Анастасия
                  </span>
                </div>
              </div>
            </div>

            <div className="flex md:hidden flex-col gap-4 sm:gap-6 items-center text-center">
              <div className="text-4xl sm:text-6xl">
                Александр
              </div>
              <div className="text-4xl sm:text-6xl">
                Анастасия  
              </div>
              <div className="text-2xl sm:text-4xl">
                Мы женимся
              </div>
              <div>
                <span className="text-2xl sm:text-4xl px-2 sm:px-3 py-1">
                  20 | 06 | 25
                </span>
              </div>
            </div>
          </div>
          <Link
            to="secondBlock"
            smooth={true}
            duration={500}
            className="text-xl sm:text-2xl lg:text-3xl cursor-pointer absolute bottom-0 mb-4 sm:mb-6 lg:mb-10"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ChevronDown size={30} className="text-white sm:w-[40px] sm:h-[40px] lg:w-[60px] lg:h-[60px]" />
            </motion.div>
          </Link>
        </div>
  
        <Element name="secondBlock" className="overflow-hidden min-h-screen pt-6 sm:pt-10 lg:pt-20">
          <div className="flex flex-col md:flex-row items-center justify-center md:gap-48 lg:gap-96 pt-6 sm:pt-8 lg:pt-16 pb-8 sm:pb-16 lg:pb-32 bg-white">
            <div className="w-full md:w-1/3 flex flex-col items-center gap-3 sm:gap-4 lg:gap-6 px-3 sm:px-4 lg:px-0">
              <div
                ref={secondBlockRef}
                className="flex items-center justify-center text-3xl sm:text-5xl lg:text-7xl text-sage text-center"
              >
                Дорогие гости!
              </div>
  
              <div className="flex items-center justify-center text-center">
                <div className="text-justify text-sage backdrop-blur-sm p-3 sm:p-4 lg:p-6 rounded-lg text-lg sm:text-xl lg:text-2xl">
                  В нашей жизни предстоят счастливые перемены! 
                  Мы хотим, чтобы в этот день рядом с нами были самые близкие и дорогие для нас люди. 
                  Будем рады разделить с вами чудесный праздник в день нашей свадьбы.
                </div>
              </div>
            </div>
  
            <div className="mt-6 sm:mt-8 md:mt-0">
              <div>
                <div className="relative">
                  <Image
                    src={"/images/date.png"}
                    width={250}
                    height={250}
                    alt={""}
                    className="sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px]"            
                  />
                </div>
              </div>
            </div>
          </div>
  
          <div className="flex flex-col items-center gap-8 sm:gap-10 lg:gap-20 pt-6 sm:pt-8 lg:pt-16 pb-6 sm:pb-8 lg:pb-16 bg-neutral-700 px-3 sm:px-4">
            <div className="text-3xl sm:text-5xl lg:text-6xl text-white text-center">
              Детали торжества
            </div>
            <div className="flex flex-col 2xl:flex-row items-center gap-6 sm:gap-8">
              <div className="w-[300px] sm:w-[350px] lg:w-[450px] h-[350px] sm:h-[500px] lg:h-[650px] bg-white p-4 sm:p-6 lg:p-16 rounded-[15px] sm:rounded-[20px] lg:rounded-[40px] flex flex-col items-center gap-3 sm:gap-4 lg:gap-6 justify-center hover:translate-y-[-10px] transition-all">
                  <div className="text-2xl sm:text-3xl lg:text-4xl text-center">
                    Церемония
                  </div>
                  <div>
                    <Image
                      src={"/images/ceremony.jpg"}
                      width={200}
                      height={200}
                      alt={""} 
                      className="rounded-[8px] sm:rounded-[10px] lg:rounded-[20px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px]"
                    />
                  </div>
  
                  <div className="text-xl sm:text-2xl lg:text-3xl text-center">
                    <span className="font-bold">Место: </span><span>Банкетный зал &quot;Лимонад&quot;</span>
                  </div>
                  
                  <div className="text-xl sm:text-2xl lg:text-3xl text-center">
                    <span className="font-bold">Время: </span><span>16:00</span>
                  </div>

                  <div className="flex text-start items-center gap-2 text-base sm:text-lg text-neutral-700">
                    <Asterisk />
                    <div>
                      Приходите заранее, за минут 15
                    </div>
                  </div>
              </div>
              
  
              <div className="w-[300px] sm:w-[350px] lg:w-[450px] h-[350px] sm:h-[500px] lg:h-[650px] bg-white p-4 sm:p-6 lg:p-12 rounded-[15px] sm:rounded-[20px] lg:rounded-[40px] flex flex-col items-center gap-3 sm:gap-4 lg:gap-6 justify-between hover:translate-y-[-10px] transition-all">
                  <div className="text-2xl sm:text-3xl lg:text-4xl">
                    Банкет
                  </div>
                  <div>
                    <Image
                      src={"/images/lemonade.jpeg"}
                      width={200}
                      height={200}
                      alt={""} 
                      className="rounded-[8px] sm:rounded-[10px] lg:rounded-[20px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px]"
                    />
                  </div>
    
                  <div className="text-xl sm:text-2xl lg:text-3xl text-center">
                    <span className="font-bold">Место: </span><span>Банкетный зал &quot;Лимонад&quot;</span>
                  </div>
                  
                  <div className="text-xl sm:text-2xl lg:text-3xl">
                    <span className="font-bold">Время: </span><span>17:00</span>
                  </div>
              </div>
  
               <div className="w-[300px] sm:w-[350px] lg:w-[450px] h-[400px] sm:h-[500px] lg:h-[650px] bg-white p-4 sm:p-6 lg:p-16 rounded-[15px] sm:rounded-[20px] lg:rounded-[40px] flex flex-col items-center gap-3 sm:gap-4 lg:gap-6 justify-between hover:translate-y-[-10px] transition-all">
                  <div className="text-2xl sm:text-3xl lg:text-4xl">
                    Дресс-код
                  </div>
                  <div>
                    <ColorCircles />
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl text-justify">  
                    Мужчин будем рады видеть в костюмах, которые подходят именно им.
                  </div>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
              <div className="flex flex-col items-center justify-center gap-8 sm:gap-12">  
                <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12">
                  <div className="flex items-center justify-center text-3xl sm:text-5xl lg:text-6xl text-white text-center">
                    Навигация
                  </div>
    
                  <div ref={mapRef} className="flex items-center justify-center">
                    <div className="bg-white/30 backdrop-blur-sm p-3 sm:p-4 lg:p-8 rounded-xl lg:rounded-2xl shadow-lg w-full">
                      <div className="bg-white p-2 sm:p-2 lg:p-4 rounded-lg lg:rounded-xl overflow-hidden">
                        <a href="https://yandex.ru/maps/45/cheboksary/house/ploshchad_rechnikov_1/YE4YdAJnTUcGQFtsfX11dn1qZA==/?ll=47.257476%2C56.147174&z=19" target="_blank">
                          <Image
                            src={"/images/address.jpg"}
                            width={1920}
                            height={1080}
                            alt={"Карта"}
                            className="hover:scale-[1.02] transition-transform duration-300 sm:w-[400px] sm:h-[300px] lg:w-[600px] lg:h-[450px]"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>   
                <div className="text-justify text-xl sm:text-3xl lg:text-4xl w-full lg:w-1/2 text-white px-3 sm:px-4 max-sm:text-center">
                  Для ознакомления с местоположением нажмите на изображение
                </div>
              </div>
    
              <div>
                  <div className="flex items-center justify-center px-3 sm:px-4 text-3xl sm:text-5xl lg:text-6xl mt-6 sm:mt-8 lg:mt-12 text-white text-center">
                    Свадебный чат
                  </div>
    
                  <div className="flex flex-col items-center justify-center px-3 sm:px-4 mt-4 sm:mt-6 lg:mt-8 gap-6 sm:gap-8 lg:gap-12">
                    <div className="bg-white/30 backdrop-blur-sm p-3 sm:p-4 lg:p-8 rounded-xl lg:rounded-2xl shadow-lg">
                      <div className="bg-white p-2 sm:p-2 lg:p-4 rounded-lg lg:rounded-xl">
                        <a href={"https://t.me/+lKO8keWoTo44MDYy"}>
                          <Image 
                            src={"/images/code.jpg"}
                            width={150}
                            height={150}
                            alt={"QR код для свадебного чата"}
                            className="hover:scale-105 transition-transform duration-300 sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px]"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="text-justify text-xl sm:text-3xl lg:text-4xl w-full lg:w-1/2 text-white px-3 sm:px-4 max-sm:text-center">
                        Для вступления также можно нажать на QR-code.
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </Element>
  
        <div className="overflow-hidden min-h-screen bg-white pb-8 sm:pb-12 lg:pb-24">
          <div className="flex items-center justify-center text-3xl sm:text-5xl lg:text-6xl mt-6 sm:mt-8 lg:mt-12 text-center px-3 sm:px-4">
            Тайминг
          </div>
  
          <div className="flex items-center justify-center text-center px-3 sm:px-4 mt-6 sm:mt-8 lg:mt-12">
            <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-12 w-full">
              <p className="text-2xl sm:text-4xl lg:text-7xl text-sage">11:00</p>
  
              <div>
                <Image 
                  src={"/images/ransom.png"} 
                  width={75} 
                  height={75} 
                  alt={""} 
                  className="sm:w-[100px] sm:h-[100px] lg:w-[125px] lg:h-[125px]"
                />
              </div>
  
              <div className="flex flex-col text-justify w-36 sm:w-48 lg:w-64">
                <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-sage">Выкуп</h2>
                <p className="text-base sm:text-xl lg:text-3xl text-neutral-800">Выкуп невесты</p>
              </div>
            </div>
          </div>
  
          <div className="flex items-center justify-center px-3 sm:px-4 mt-3 sm:mt-4">
            <div className="p-[0.9px] w-[1.5px] h-[20px] sm:h-[30px] lg:h-[50px] bg-sage"></div>
          </div>
  
          <div className="flex items-center justify-center text-center px-3 sm:px-4 mt-3 sm:mt-4">
            <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-12">
              <p className="text-2xl sm:text-4xl lg:text-6xl text-sage">12:30</p>
  
              <div>
                <Image 
                  src={"/images/photo.png"} 
                  width={75} 
                  height={75} 
                  alt={""} 
                  className="sm:w-[100px] sm:h-[100px] lg:w-[125px] lg:h-[125px]"
                />
              </div>
  
              <div className="flex flex-col text-justify w-36 sm:w-48 lg:w-64">
                <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-sage">Фотосессия</h2>
                <p className="text-base sm:text-xl lg:text-3xl text-neutral-800">Приготовьтесь запечатлеть самые яркие моменты</p>
              </div>
            </div>
          </div>
  
          <div className="flex items-center justify-center px-3 sm:px-4 mt-3 sm:mt-4">
            <div className="p-[0.9px] w-[1.5px] h-[20px] sm:h-[30px] lg:h-[50px] bg-sage"></div>
          </div>
  
          <div className="flex items-center justify-center text-center px-3 sm:px-4 mt-3 sm:mt-4">
            <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-12">
              <p className="text-2xl sm:text-4xl lg:text-6xl text-sage">15:30</p>
  
              <div>
                <Image 
                  src={"/images/glasses.png"} 
                  width={75} 
                  height={75} 
                  alt={""} 
                  className="sm:w-[100px] sm:h-[100px] lg:w-[125px] lg:h-[125px]"
                />
              </div>
  
              <div className="flex flex-col text-justify w-36 sm:w-48 lg:w-64">
                <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-sage">Welcome</h2>
                <p className="text-base sm:text-xl lg:text-3xl text-neutral-800">Просим вас не опаздывать. Для нас это очень важно.</p>
              </div>
            </div>
          </div>
  
          <div className="flex items-center justify-center px-3 sm:px-4 mt-3 sm:mt-4">
            <div className="p-[0.9px] w-[1.5px] h-[20px] sm:h-[30px] lg:h-[50px] bg-sage"></div>
          </div>
  
          <div className="flex items-center justify-center text-center px-3 sm:px-4 mt-3 sm:mt-4">
            <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-12">
              <p className="text-2xl sm:text-4xl lg:text-6xl text-sage">16:00</p>
  
              <div>
                <Image 
                  src={"/images/rings.png"} 
                  width={75} 
                  height={75} 
                  alt={""} 
                  className="sm:w-[100px] sm:h-[100px] lg:w-[125px] lg:h-[125px]"
                />
              </div>
  
              <div className="flex flex-col text-justify w-36 sm:w-48 lg:w-72">
                <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-sage w-full lg:w-[350px]">Выездная регистрация</h2>
                <p className="text-base sm:text-xl lg:text-3xl text-neutral-800">Приготовьте платочки для трогательного момента.</p>
              </div>
            </div>
          </div>
  
          <div className="flex items-center justify-center px-3 sm:px-4 mt-3 sm:mt-4">
            <div className="p-[0.9px] w-[1.5px] h-[20px] sm:h-[30px] lg:h-[50px] bg-sage"></div>
          </div>
  
          <div className="flex items-center justify-center text-center px-3 sm:px-4 mt-3 sm:mt-4">
            <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-12">
              <p className="text-2xl sm:text-4xl lg:text-6xl text-sage">17:00</p>
  
              <div>
                <Image 
                  src={"/images/banquet.png"} 
                  width={45} 
                  height={45} 
                  alt={""} 
                  className="sm:w-[60px] sm:h-[60px] lg:w-[75px] lg:h-[75px]"
                />
              </div>
  
              <div className="flex flex-col text-justify w-36 sm:w-48 lg:w-64">
                <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-sage">Банкет</h2>
                <p className="text-base sm:text-xl lg:text-3xl text-neutral-800 w-full lg:w-[300px]">Время танцев, вкусной еды, теплых пожеланий и развлечений.</p>
              </div>
            </div>
          </div>
        </div>
  
        <div className="bg-neutral-700 py-8 sm:py-10 lg:py-20">
          <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-12">
            <div className="grid grid-cols-2 md:grid-cols-4 mx-auto px-3 sm:px-4 relative">
              <div className="relative overflow-hidden aspect-[3/4]">
                <Image
                  src="/images/collage/1.jpg"
                  width={300}
                  height={400}
                  alt=""
                  className="hover:scale-110 transition-all duration-300 brightness-50 w-full h-full object-cover"
                />
              </div>
              <div className="relative overflow-hidden aspect-[3/4]">
                <Image
                  src="/images/collage/2.jpg" 
                  width={300}
                  height={400}
                  alt=""
                  className="hover:scale-110 transition-all duration-300 brightness-50 w-full h-full object-cover"
                />
              </div>
              <div className="relative overflow-hidden aspect-[3/4]">
                <Image
                  src="/images/collage/3.jpg"
                  width={300}
                  height={400}
                  alt=""
                  className="hover:scale-110 transition-all duration-300 brightness-50 w-full h-full object-cover"
                />
              </div>
              <div className="relative overflow-hidden aspect-[3/4]">
                <Image
                  src="/images/collage/4.jpg"
                  width={300}
                  height={400}
                  alt=""
                  className="hover:scale-110 transition-all duration-300 brightness-50 w-full h-full object-cover"
                />
              </div>
  
              <div className="text-3xl sm:text-4xl lg:text-5xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-3 sm:px-4">
                Наша история любви
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }