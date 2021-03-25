import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "iPhone 12 Pro",
                "src": "../images/Iphone/iphone12 pro_gold1.jpg",
                "src2":"../images/Iphone/iphone12 pro_gold2.jpg",
                "src3":"../images/Iphone/iphone12 pro_gold3.jpg",
                "os": "‎IOS 14",
                "brand": "Apple",
                "ram": "128 GB",
                "dimension": "14.67 x 7.15 x 0.74 cm; 198 Grams",
                "box":"USB-C to Lightning Cable",
                "weight": "‎198 g",
                "model": "iPhone 12 Pro",                
                "description": ["6.1-Inch Super Retina XDR Display","A14 Bionic Chip","5G on iPhone is superfast. So you can download movies on the fly. Stream higher-quality video","Facetime service depends on network restrictions and is not available when on UAE networks"],
                "discount": 4199,
                "price": 3708,
                "colors": ["gold", "grey", "silver"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "iPhone 12",
                "src": "../images/Iphone/iphone12_black1.jpg",
                "src2": "../images/Iphone/iphone12_black2.jpg",
                "src3": "../images/Iphone/iphone12_black3.jpg",
                "os": "‎IOS 14",
                "brand": "Apple",
                "ram": "128 GB",
                "dimension": "	‎14.67 x 7.15 x 0.74 cm; 164 Grams",
                "box":"USB-C to Lightning Cable",
                "weight": "‎164 g",
                "model": "iPhone 12",                
                "description": ["6.1-Inch Super Retina XDR Display","A14 Bionic Chip","5G on iPhone is superfast. So you can download movies on the fly. Stream higher-quality video","Facetime service depends on network restrictions and is not available when on UAE networks"],
                "discount": 3609,
                "price": 3219,
                "colors": ["black", "blue", "red", "white"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "iPhone 11",
                "src": "../images/Iphone/iphone11_black1.jpg",
                "src2": "../images/Iphone/iphone11_black2.jpg",
                "src3": "../images/Iphone/iphone11_black3.jpg",
                "os": "‎IOS 13",
                "brand": "Apple",
                "ram": "128 GB",
                "dimension": "0.83 x 7.57 x 15.09 cm; 194 Grams",
                "box":"USB-C to Lightning Cable",
                "weight": "‎194 g",
                "model": "iPhone 11",                
                "description": ["It just got a whole lot harder to take a bad photo, Love at first, second, third, fourth, fifth, and sixth sight","A new dual‑camera system captures more of what you see and love. The fastest chip ever in a smartphone and all‑day battery life let you do more and charge less.","Shooting in low light doesn’t have to be a shot in the dark. Night mode is a new feature that turns on automatically for low‑light photos like you’ve never seen.","6.1-Inch Liquid Retina HD LCD display.", "Water and dust resistant (2 meters for up to 30 minutes, IP68).","Dual-camera system with 12MP Ultra wide and wide cameras; night mode, Portrait mode, and 4K video up to 60fps.","Face ID for secure authentication and Apple Pay.","A13 Bionic chip with third-generation Neural Engine.","Facetime service depends on network restrictions and is not available when on UAE networks"],
                "discount": 2599,
                "price": 2449,
                "colors": ["red", "black", "yellow"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "iPhone SE",
                "src": "../images/Iphone/iphoneSE_black1.jpg",
                "src2": "../images/Iphone/iphoneSE_black2.jpg",
                "src3": "../images/Iphone/iphoneSE_black3.jpg",
                "os": "‎IOS",
                "brand": "Apple",
                "ram": "128 GB",
                "dimension": "‎0.73 x 6.7 x 15.7 cm; 148 Grams",
                "box":"Earpods with lightining connector,cable.USB adaptor",
                "weight": "‎148 g",
                "model": "iPhone SE",                
                "description": ["International Warranty",
                "4.7-inch Retina HD display / A13 Bionic chip with third-generation Neural Engine",
                "Water and dust resistant (1 meter for up to 30 minutes, IP67) / Fast-charge capable / Wireless charging",
                "12MP Wide camera; Portrait mode, Portrait Lighting, Depth Control, next-generation Smart HDR, and 4K video",
                "7MP front camera with Portrait mode, Portrait Lighting, and Depth Control",
                "iOS 13 with Dark Mode, new tools for editing photos and video, and new privacy features",
                "Touch ID for secure authentication",
                "Facetime service depends on network restrictions and is not available when on UAE networks"
            ],
                "discount": 1899,
                "price": 1770.65,
                "colors": ["black", "red", "white"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "iPhone XR",
                "src": "../images/Iphone/iphoneXR_black1.jpg",
                "src2": "../images/Iphone/iphoneXR_black2.jpg",
                "src3": "../images/Iphone/iphoneXR_black3.jpg",
                "os": "‎IOS",
                "brand": "Apple",
                "ram": "256 GB",
                "dimension": "‎5.2 x 17 x 9.4 cm; 194 Grams",
                "box":"Earpods with lightining connector,cable.USB adaptor",
                "weight": "‎194 g",
                "model": "iPhone XR",                
                "description": ["A12 Bionic chip Processor",
                "12MP Camera",
                "Face ID",
                "iOS Operating System",
                "4G LTE"
            ],
                "discount": 2600,
                "price": 2449,
                "colors": ["black", "red", "white"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "Samsung S21",
                "src": "../images/Samsung/samsungS21_black1.jpg",
                "src2": "../images/Samsung/samsungS21_black2.jpg",
                "src3": "../images/Samsung/samsungS21_black3.jpg",
                "os": "Android",
                "brand": "Samsung",
                "ram": "256 GB",
                "dimension": "‎16.7 x 9.1 x 3.7 cm; 169 Grams",
                "box":"Mobile Device, USB Type-C Data Cable, Ejection Pin, Quick Start Guide",
                "weight": "‎169 g",
                "model": "Samsung S21",                
                "description": ["Take Epic Photography: Capture epic shots with a 64MP telephoto, 12MP ultra wide, 12MP wide, and a 10MP front camera. Mobile photography made effortless.",
                "Infinity-O Dynamic AMOLED 2x Display: Content comes alive on the HDR10+ certified 6.2-inch screen. Complementing it is a 120Hz refresh rate, so that you get incredibly smooth scrolling and gaming.",
                "8GB of RAM and 256GB of ROM: Thanks to a powerful processor with built-in advanced AI and more-than-generous amounts of RAM, it's performance beyond anything we've done before.",
                "4000mAh Battery with Fast Charging: All the fuel in minutes – shareable and available wirelessly. It doesn't stop there – they are intelligent, analyzing your usage patterns to save more power, giving you more charge.",
                "5NM Processor: Galaxy's first 5NM processor packs power and speed in a smaller package – offering you more efficiency and performance."
            ],
                "discount": 3399,
                "price": 2680.46,
                "colors": ["black", "silver", "violet"],
                "count": 1
            },
            {
                "_id": "7",
                "title": "Samsung S21 Ultra 5G",
                "src": "../images/Samsung/samsungS21ultra5G_black1.jpg",
                "src2": "../images/Samsung/samsungS21ultra5G_black2.jpg",
                "src3": "../images/Samsung/samsungS21ultra5G_black3.jpg",
                "os": "Android",
                "brand": "Samsung",
                "ram": "512 GB",
                "dimension": "‎17.6 x 9 x 3.6 cm; 227 Grams",
                "box":"	‎Mobile Device, USB Type-C Data Cable, Ejection Pin, Quick Start Guide",
                "weight": "‎227 g",
                "model": "Samsung S21 Ultra 5G",                
                "description": ["Take Epic Photography: Capture the never-been-seen before with two 10MP telephoto cameras, a 12MP ultra wide, 108MP wide (incl. Laser ToF Lense), and a 40MP front camera. It's a massive leap for mobile photography.",
                "Infinity-O Dynamic AMOLED 2x Display: Content comes alive on the HDR10+ certified 6.8-inch screen. Complementing it is a 120Hz refresh rate, so that you get incredibly smooth scrolling and gaming.",
                "S Pen: Get the function and versatility of the S Pen on your Galaxy S21 Ultra. Change the way you edit and fine-tune, on the fly.",
                "16GB of RAM and 512GB of ROM: Thanks to a powerful processor with built-in advanced AI and more-than-generous amounts of RAM, it's performance beyond anything we've done before.",
                "5000mAh Battery with Fast Charging: All the fuel in minutes – shareable and available wirelessly. It doesn't stop there – they are intelligent, analyzing your usage patterns to save more power, giving you more charge."
            ],
                "discount": 5399,
                "price": 4449,
                "colors": ["black", "silver"],
                "count": 1
            },
            {
                "_id": "8",
                "title": "Samsung Z Fold 2",
                "src": "../images/Samsung/samsungZfold2_mysticblack1.jpg",
                "src2": "../images/Samsung/samsungZfold2_mysticblack2.jpg",
                "src3": "../images/Samsung/samsungZfold2_mysticblack3.jpg",
                "os": "Android",
                "brand": "Samsung",
                "ram": "256 GB",
                "dimension": "‎17.6 x 15.3 x 6.6 cm; 780 Grams",
                "box":"‎Camera Body, Battery Pack",
                "weight": "‎780 g",
                "model": "Samsung Z Fold 2",                
                "description": ["Design: Shape of tomorrow’s design meets the latest technology available yet. It's supported by a powerful hinge, foldable screen, and an all-day battery right in your hands.",
                "Displays inside out: The stunning device features dual displays. An internal, 7.6-inch Infinity Flex Display AMOLED 2X foldable display for that extra room, and an external 6.2-inch display for the essentials.",
                "New way to take photos: Take it all in with the 12MP Ultra wide Camera, capture more light with the bright 12MP Wide-angle Camera, or zoom in with the help of 12MP Telephoto Camera. Take photos in a new way, every day.",
                "Multitasking: With a foldable, roomier internal screen, you can multitask with ease. The Galaxy Z Fold2 features multi-window layout and App Continuity for a seamless experience across apps.",
                "4500mAh battery with Super Fast Charging: The phone features dual batteries that work as one to give you a full day of power. It's got your back when it comes to running your phone efficiently."
            ],
                "discount": 7599,
                "price": 5516.01,
                "colors": ["black", "bronze"],
                "count": 1
            },
            {
                "_id": "9",
                "title": "Samsung Galaxy Note 20",
                "src": "../images/Samsung/samsungnote20_mysticbronze1.jpg",
                "src2": "../images/Samsung/samsungnote20_mysticbronze2.jpg",
                "src3": "../images/Samsung/samsungnote20_mysticbronze3.jpg",
                "os": "Android",
                "brand": "Samsung",
                "ram": "256 GB",
                "dimension": "‎‎0.85 x 7.5 x 16.18 cm; 480 Grams",
                "box":"‎Camera Body, Battery Pack",
                "weight": "‎480 g",
                "model": "Samsung Galaxy Note 20",                
                "description": ["Upgraded S Pen: Get a realistic pen experience, packed with the versatility of Bluetooth, gesture control, and so much more. It will change the way you experience a Note phone.",
                "Display: Whether you choose the Galaxy Note20’s 6.7” flat Infinity-O Display or the Galaxy Note20 Ultra’s 6.9” edge Infinity-O Display, you’ll always have a wide canvas for all your work and play.",
                "Camera: Galaxy Note20 gets a 64MP telephoto (3x Optic Zoom & 30x Super Resolution Zoom), 12MP ultrawide, 12MP wide, and 10MP front camera. Galaxy Note20 Ultra comes with 12MP telephoto (5x Optic Zoom & 50x Super Resolution Zoom), 12MP ultrawide, 108MP wide, 10MP front camera, and Laser AF sensor.",
                "Memory: Every Galaxy Note20 comes with 256GB of ROM – all the space you need to store your files. With the Galaxy Note20 Ultra, you can take it one step ahead with up to 512GB of storage.",
                "4300mAh (Galaxy Note20)/ 4500mAh (Galaxy Note20 Ultra) battery and 25W Super Fast Charging: The all-day intelligent batteries will keep up with your work and play. And when you run low, you'll get back to what you were doing right away thanks to the quick charging."
            ],
                "discount": 3549,
                "price": 2614.96,
                "colors": ["bronze", "green", "grey"],
                "count": 1
            },
            {
                "_id": "10",
                "title": "Samsung Note20 Ultra",
                "src": "../images/Samsung/samsungnote20ultra_mysticblack1.jpg",
                "src2": "../images/Samsung/samsungnote20ultra_mysticblack2.jpg",
                "src3": "../images/Samsung/samsungnote20ultra_mysticblack3.jpg",
                "os": "Android 10.0",
                "brand": "Samsung",
                "ram": "256 GB",
                "dimension": "‎0.81 x 7.72 x 16.48 cm; 500 Grams",
                "box":"‎Camera Body, Battery Pack",
                "weight": "‎500 g",
                "model": "Samsung Galaxy Note 20 Ultra",                
                "description": ["Upgraded S Pen: Get a realistic pen experience, packed with the versatility of Bluetooth, gesture control, and so much more. It will change the way you experience a Note phone.",
                "Display: Whether you choose the Galaxy Note20’s 6.7” flat Infinity-O Display or the Galaxy Note20 Ultra’s 6.9” edge Infinity-O Display, you’ll always have a wide canvas for all your work and play.",
                "Camera: Galaxy Note20 gets a 64MP telephoto (3x Optic Zoom & 30x Super Resolution Zoom), 12MP ultrawide, 12MP wide, and 10MP front camera. Galaxy Note20 Ultra comes with 12MP telephoto (5x Optic Zoom & 50x Super Resolution Zoom), 12MP ultrawide, 108MP wide, 10MP front camera, and Laser AF sensor.",
                "Memory: Every Galaxy Note20 comes with 256GB of ROM – all the space you need to store your files. With the Galaxy Note20 Ultra, you can take it one step ahead with up to 512GB of storage.",
                "4300mAh (Galaxy Note20)/ 4500mAh (Galaxy Note20 Ultra) battery and 25W Super Fast Charging: The all-day intelligent batteries will keep up with your work and play. And when you run low, you'll get back to what you were doing right away thanks to the quick charging."
            ],
                "discount": 4899,
                "price": 3550,
                "colors": ["black", "bronze", "white"],
                "count": 1
            },
            {
                "_id": "11",
                "title": "Samsung Galaxy S20 FE",
                "src": "../images/Samsung/samsungS20FE_cloudnavy1.jpg",
                "src2": "../images/Samsung/samsungS20FE_cloudnavy2.jpg",
                "src3": "../images/Samsung/samsungS20FE_cloudnavy3.jpg",
                "os": "Android",
                "brand": "Samsung",
                "ram": "128 GB",
                "dimension": "‎19 x 9 x 6 cm; 440 Grams",
                "box":"Charger, Mobile Device",
                "weight": "‎440 g",
                "model": "Samsung Galaxy S20 FE",                
                "description": ["Elevate photography: Capture your life's amazing shots with the 12MP ultrawide, 12MP wide, 8MP telephoto, and a 32MP front camera. Take #nofilter -worthy shots with ease thanks to pro-grade photography.",
                "Infinity-O Super AMOLED 2X Display: Your content comes alive on the 6.5-inch screen. Complementing it is a 120Hz refresh rate, so that you get incredibly smooth scrolling and gaming.",
                "High-speed connectivity: Whether it's LTE or 5G, you get to do more of what you love. Enjoy your moments and share it too at super-fast speeds. Stream. Game. Connect. Share. Work. Without any lag.",
                "8GB of RAM and 128GB of ROM: Thanks to a powerful processor with built-in advanced AI and more-than-generous amounts of RAM, it delivers performance that keeps up with your demands.",
                "4500mAh battery with Fast Charging: All the fuel in minutes – shareable and available wirelessly. It doesn't stop there – they are intelligent, analysing your usage patterns to save more power, giving you more charge."
            ],
                "discount": 2699,
                "price": 1829,
                "colors": ["blue", "purple", "white"],
                "count": 1
            },
            {
                "_id": "12",
                "title": "Huawei P40 Pro",
                "src": "../images/Huawei/huaweiP40pro_black1.jpg",
                "src2": "../images/Huawei/huaweiP40pro_black2.jpg",
                "src3": "../images/Huawei/huaweiP40pro_black3.jpg",
                "os": "‎Android",
                "brand": "Huawei",
                "ram": "256 GB",
                "dimension": "‎0.9 x 7.26 x 15.82 cm; 210 Grams",
                "box":"‎Protective Case x 1, Charger x 1, Eject Tool x 1, USB Type-C Earphones x 1, Quick Start Guide x 1, USB Type-C Cable x 1, Phone(Built-in battery) x 1",
                "weight": "‎210 g",
                "model": "Huawei P40 Pro",                
                "description": ["Ultra Vision Leica Quad Camera: 50 MP Ultra Vision Sensor, 40 MP Ultra Wide Cine Camera, 12 MP Telephoto Cameras, 3D Depth Sensing Camera",
                "Quad-curve Overflow Display, IP68: The Quad-Curve Overflow Display is innovated to dissolve the barriers of vision and imagination on every edge. Plus with the 90 Hz refresh rate",
                "Wi-Fi 6 Plus: Using Dynamic Narrow Bandwidth technology, the Wi-Fi 6 Plus enabled phone penetrates more walls and floors",
                "5G & Outstanding Performance: Embrace the ultra-fast speed with the world’s first integrated 5G SoC, Kirin 990 5G chipset.",
                "Any applications or services related to GMS (Google Mobile Service) may not work on this device",
                "The HUAWEI P40 pro Smartphone comes with the new 【HUAWEI AppGallery】and is not compatible with Google Play Store and Services. Find more about HUAWEI AppGallery on the Huawei Community"
            ],
                "discount": 3499,
                "price": 2597,
                "colors": ["black", "silver"],
                "count": 1
            },
            {
                "_id": "13",
                "title": "Huawei Mate 30 Pro",
                "src": "../images/Huawei/huaweiMate30pro_emeraldgreen1.jpg",
                "src2": "../images/Huawei/huaweiMate30pro_emeraldgreen2.jpg",
                "src3": "../images/Huawei/huaweiMate30pro_emeraldgreen3.jpg",
                "os": "‎Android",
                "brand": "Huawei",
                "ram": "256 GB",
                "dimension": "1 x 7 x 18 cm; 600 Grams",
                "box":"‎Phone (Built-in battery) x 1, Protective Case x 1, Warranty Card x 1, Charger x 1, Type-C Cable x 1, Eject Tool x 1, Quick Start Guide x 1, Type-C Earphones x 1",
                "weight": "‎600 g",
                "model": "Huawei Mate 30 Pro",                
                "description": ["World’s 1st Flagship 5G SoC (7nm+EUV) Dual Mode 5G (SA & NSA)",
                "40 MP SuperSensing Cine Camera 256x Ultra Slow-motion Video up to 7680 fps",
                "Huawei Mate 30 Pro uses Android 10 + HMS (Huawei Mobile Service).GMS (Google Mobile Service) is not pre-installed when phone is purchased.",
                "The ultra-curved screen extends the horizon for an ultimate immersive viewing experience.",
                "Any applications or services related to GMS (Google Mobile Service) may not work on this device.",
                "The HUAWEI Mate 30 pro Smartphone comes with the new 【HUAWEI AppGallery】and is not compatible with Google Play Store and Services. Find more about HUAWEI AppGallery on the Huawei Community"
            ],
                "discount": 3299,
                "price": 3199,
                "colors": ["green"],
                "count": 1
            },
            {
                "_id": "14",
                "title": "Huawei Nova 2 SE",
                "src": "../images/Huawei/huaweiNova2SE_green1.jpg",
                "src2": "../images/Huawei/huaweiNova2SE_green2.jpg",
                "src3": "../images/Huawei/huaweiNova2SE_green3.jpg",
                "os": "‎Android",
                "brand": "Huawei",
                "ram": "128 GB",
                "dimension": "‎16.23 x 7.5 x 0.86 cm; 189 Grams",
                "box":"	‎Phone (Built-in battery),Charging Cable,Headset,TPU Protective Case,Quick Start Guide,Eject Tool,Warranty Card",
                "weight": "‎189 g",
                "model": "Huawei Nova 2 SE",                
                "description": ["【5G and Outstanding Performance】 The HUAWEI nova 7 SE features the new and improved 7nm Kirin 820，it works to ensure that image processing and photo/video denoising are top-notch across the board , HUAWEI nova 7 SE make your best connection is always on hand.",
                "【64 MP Quad AI Camera】64 MP Main Camera (high-res lens), 8 MP (Ultra Wide Angle Lens), 2 MP (Macro Lens) + 2 MP (Bokeh Sensor lens).Capture sweeping landscapes with crystal clarity, crawling critters from up close, or enchanting portraits all on a staggering 64 MP camera.",
                "【6.5'' Punch Fullview Display】Feast your eyes on a genuine bezel-less display that's crafted with a remarkable attention to detail. The front camera is housed unobtrusively below the surface, providing a 90.3%* screen-to-body ratio for unconstrained, immersive viewing.",
                "【4000 mAh battery, 40 W SuperCharge】Send battery drain down the drain, with the 4,000 mAh battery. And if you're running out of juice, Huawei's 40W SuperCharge technology, certified for safety by TÜV Rheinland, can restore the charge to 70% in just half an hour.",
                "【8 GB RAM, 128 GB ROM 】8 GB of RAM easily handles even the most intensive multitasking. 128 GB of ROM provides you with ample space to download all of your favourite apps, pictures, videos and games.",
                "The HUAWEI nova 7 SE Smartphone comes with the new 【HUAWEI AppGallery】and is not compatible with Google Play Store and Services. Find more about HUAWEI AppGallery on the Huawei Community"
            ],
                "discount": 1399,
                "price": 1025,
                "colors": ["green", "purple", "silver"],
                "count": 1
            },
            {
                "_id": "15",
                "title": "Oppo Reno 10X",
                "src": "../images/Oppo/oppo10x_black1.jpg",
                "src2": "../images/Oppo/oppo10x_black2.jpg",
                "src3": "../images/Oppo/oppo10x_black3.jpg",
                "os": "‎Android 10.0",
                "brand": "Oppo",
                "ram": "256 GB",
                "dimension": "‎23 x 9.4 x 6 cm; 680 Grams",
                "box":"	‎Protective Cover, Earphone, Charger",
                "weight": "‎680 g",
                "model": "Oppo Reno 10X",                
                "description": ["Reno 10x zoom version 10x hybrid optical zoom, closer to the world. Reno 10x Zoom Edition uses 48 million HD maincam + 13 million periscope telephoto lens + 8 million super wide-angle lens combination, three cameras 'connected' to achieve 16-160mm 'full focal length' coverage, releasing more image creation The degree of freedom. The three-shot combination contains dual OIS optical image stabilization, smart sensing jitter and correction, and the distance is clear.",
                "Ultra Clear Night View 2.0, Touch the night to shoot. The Reno series features the superb Sony IMX 586, 48 million ultra clear pixel lenses, 1/2.0 inch sensor, f/1.7 aperture, plus a more powerful composite multi-frame noise reduction and HDR technology than the previous generation. To surpass the previous hand-held anti-shake, night scene noise reduction, high-light suppression effect, the imaging details are amazing. Added AI night view portrait optimization, partitioning characters and night scenes to protect the real skin color of the portrait, and help create a beautiful night scene portrait.",
                "Three-shot full-focus image system, Add extra points for your creativity. The Reno 10x zoom version features a 48 million HD main camera + 13 million periscope telephoto camera + 8 million super wide-angle camera combination. The three cameras have their own functions and tacit understanding. The 'connector' achieves 16-160mm 'full focal length' coverage, while meeting the needs of all-round image creation for ultra-wide angle, portrait, 10x hybrid optical zoom, 4K video recording."
            ],
                "discount": 2200,
                "price": 2063,
                "colors": ["black"],
                "count": 1
            },
            {
                "_id": "16",
                "title": "Oppo Reno 3",
                "src": "../images/Oppo/opporeno3_black1.jpg",
                "src2": "../images/Oppo/opporeno3_black2.jpg",
                "src3": "../images/Oppo/opporeno3_black3.jpg",
                "os": "‎Android",
                "brand": "Oppo",
                "ram": "128 GB",
                "dimension": "‎7.3 x 7.3 x 15.8 cm; 1.75 Kilograms",
                "box":"	‎Speaker, Charger",
                "weight": "‎1.75 kg",
                "model": "Oppo Reno 3",                
                "description": ["8gb ram, 128gb storage ,6.4 inch super amoled screen",
                "44mp front camera",
                "Quad camera 48mp+13mp+8mp+2mp",
                "Triple slot",
                "4025 mah"
            ],
                "discount": 1399,
                "price": 1229,
                "colors": ["black"],
                "count": 1
            },
            {
                "_id": "17",
                "title": "Oppo Reno 3 Pro",
                "src": "../images/Oppo/opporeno3pro_black1.jpg",
                "src2": "../images/Oppo/opporeno3pro_black2.jpg",
                "src3": "../images/Oppo/opporeno3pro_black3.jpg",
                "os": "‎Android",
                "brand": "Oppo",
                "ram": "256 GB",
                "dimension": "‎7.3 x 7.3 x 15.8 cm; 1.75 Kilograms",
                "box":"	‎Speaker, Charger",
                "weight": "‎1.75 kg",
                "model": "Oppo Reno 3 Pro",                
                "description": ["Larger & smoother reno3 pro includes a massive 8gb + 256gb memory capacity and specially optimized f2fs file system, you get expanded storage space and an elevated experience. 8gb ram up to 256gb rom lpddr4x ufs2.1",
                "World 1st dual punch hole camera 44mp+2mp : dual punch-hole display innovative display design. For the first time, the reno3 pro has introduced an innovative display design in the form of dual punch-hole display, enabling full-screen field of vision. We have designed specially catered full-screen wallpapers to match this upgraded look.",
                "Quad camera 64mp+13mp+8mp+2mp",
                "Reno3 pro creates exceptional night scene images with ultra dark mode. Powerful npu shortens imaging time, and multi-frame ai noise reduction helps image denoising. ultra dark mode is turned on automatically when the scene has brightness below 1lux.",
                "64MP Zoom Quad Camera Clear in Day and Night. 13MP Telephoto Lens 64MP Ultra-clear Main Camera 2MP Mono Lens 8MP Ultra Wide-angle Lens",
                "VOOC Flash Charge 4.0 Last longer, Recharge faster. Reno3 Pro features an extended high-current charging time, thanks to 30W of charging power, a 4025 mAh battery, and TV Rheinland Safe Fast-Charge System certification. 4025mAh Battery 30w Charging power",
                "OSIE Ultra Clear Visual Effect OPPO Screen Image Engine (OSIE), OPPO's self-developed visual optimization technology increases picture saturation and contrast to enhance visual effects on third-party apps.",
                "Hidden Fingerprint Unlock 3.0 Unlock in One Motion. Additionally, anti-counterfeit identification has been optimized to improve security."
            ],
                "discount": 1399,
                "price": 1330,
                "colors": ["black", "blue"],
                "count": 1
            },
            {
                "_id": "18",
                "title": "Oppo Reno 4",
                "src": "../images/Oppo/opporeno4_black1.jpg",
                "src2": "../images/Oppo/opporeno4_black2.jpg",
                "src3": "../images/Oppo/opporeno4_black3.jpg",
                "os": "‎Android 10.0",
                "brand": "Oppo",
                "ram": "128 GB",
                "dimension": "‎16.38 x 7.55 x 0.81 cm; 550 Grams",
                "box":"	‎Speaker, Charger, Smartpghone",
                "weight": "550 g",
                "model": "Oppo Reno 4",                
                "description": ['Display: 06:57 ", 1080 x 2400 pixels',
                "Processor: Mediatek Dimensity 800 5G 2GHz",
                "Camera: Quad, 48MP + 8MP + 2MP + 2MP",
                "Battery: 4000 mAh"
            ],
                "discount": 1300,
                "price": 1219,
                "colors": ["black", "blue", "white"],
                "count": 1
            },
            {
                "_id": "19",
                "title": "Oppo Reno 4 Pro",
                "src": "../images/Oppo/opporeno4pro_black1.jpg",
                "src2": "../images/Oppo/opporeno4pro_black2.jpg",
                "src3": "../images/Oppo/opporeno4pro_black3.jpg",
                "os": "‎Android 10.0",
                "brand": "Oppo",
                "ram": "256 GB",
                "dimension": "	‎33.6 x 21.6 x 6.8 cm; 850 Grams",
                "box":"	‎Speaker, Charger, Smartpghone",
                "weight": "850 g",
                "model": "Oppo Reno 4 Pro",                
                "description": ['65w supervooc 2.0 : cut down on charging time with our industry-leading 65w supervooc 2.0 flash charging. Charge 30%+ during your 5-minute meeting break, 49% during a 10-minute power nap, or 100% in just 36 minutes². And in this case, a fast charge is also a safe charge, thanks to tv rheinland safe fast-charge system certification.',
                "Qualcomm snapdragon 720g 8gb+256 gb the snapdragon 720g processor brings an intelligent edge to phone performance. Enjoy a faster, smoother experience, from heavyweight games to hardcore multitasking. With 8gb of ram and 256gb of storage space, there's plenty of room to move and breathe.",
                "960fps smart slow-motion in order to capture excited moments, we've quadrupled the number of moments we can record from 240fps to 960fps.",
                "Hidden fingerprint unlock 4.0 accelerate your access in 0.34s unlock your phone in an instant with our newest-generation fingerprint scanning technology. We've condensed the scanning module and boosted recognition speed to bring you this subtle yet speedy unlocking method.aspect ratio",
                "Ultra slim body slimmed down & lighted up at just 7.7mm and 161g, the reno4 pro is almost invisible from the side, and almost imperceptible in your pocket or purse. Slimmer than you think, lighter than you feel.",
                "Unique anti-glare finish comfortable feeling, less fingerprint matte is in – not just for its elegant appearance and satiny texture, but also for its ability to resist fingerprints. Our unique anti-glare finish affords a stylish and smudge-free look"
            ],
                "discount": 1999,
                "price": 1799,
                "colors": ["black", "blue"],
                "count": 1
            },
            {
                "_id": "20",
                "title": "Oppo Reno 5",
                "src": "../images/Oppo/opporeno5_black1.jpg",
                "src2": "../images/Oppo/opporeno5_black2.jpg",
                "src3": "../images/Oppo/opporeno5_black3.jpg",
                "os": "‎Android 10.0",
                "brand": "Oppo",
                "ram": "128 GB",
                "dimension": "‎17.6 x 12.4 x 9 cm; 680 Grams",
                "box":"Phone, Protective Case, Charger, SIM Ejector Tool, Safety Guide (with a warranty card), Earphones, USB Cable, Quick Start Guide",
                "weight": "680 g",
                "model": "Oppo Reno 5",                
                "description": ["Camera Back- 64MP main +8MP ultra wide + 2MP Mono + 2MP macro",
                "Diamond spectrum: it is oppo's unique technology and gives the phone thousands of color, make it shiny like diamond and 100% fingerprint free",
                "65W SuperVOOC 2.0 Fast Charging More Screen Time Charge the massive 4300mAh5battery to 60% battery in just 15 minutes.6 Get 100% battery in as short as 35 minutes.6 Only 5% battery left? Turn on Super Power Saving Mode, and freely chat on WhatsApp for 1.4 hours.7",
                "AI Highlight Video Never Let Lighting Stop You Activate the powerful AI combination of Ultra Night Video and Live HDR with a single touch, Live HDR In daylight, Live HDR adjusts your backlight.Ultra Night Video In nighttime, Ultra Night Video keeps your shots naturally bright.",
                "Dual-view Video Never Miss Out on a Single Moment There are always two sides to every story. And we know both sides are equally important. With the split-screen, seamlessly and simultaneously capture every single moment.",
                "64MP AI Quad Camera Powerful Hardware Mighty Cameras Want sharp, incredible, and dynamic shots? With a 64MP main camera that’s supported by multiple auxiliary cameras, plus an impressive 32MP front camera, every shot you take will be stunning.",
                "Ultra Slim Body Slender. Light. Airy The lighter it is, the longer you can hold it. We made your next favorite 5G phone comfortably thin, blissfully light.",
                "HD Shows at Your Fingertips Netflix HD Certification & Amazon Prime Video HD Certification Watch your favorite shows in HD, thanks to Netflix HD Streaming Certification and Amazon Prime Video HD Streaming Certification."
            ],
            "discount": 2100,
            "price": 1999,
            "colors": ["black", "red", "white"],
            "count": 1
            },
             {
                "_id": "21",
                "title": "Oppo Reno 5 Pro",
                "src": "../images/Oppo/opporeno5pro_black1.jpg",
                "src2": "../images/Oppo/opporeno5pro_black2.jpg",
                "src3": "../images/Oppo/opporeno5pro_black3.jpg",
                "os": "‎Android 10.0",
                "brand": "Oppo",
                "ram": "256 GB",
                "dimension": "‎18.8 x 12 x 8.8 cm; 690 Grams",
                "box":"Pair of Earphones, Phone, Safety Guide, Protective Case, Charger, SIM Ejector Tool, USB Data Cable, Quick Start Guide",
                "weight": "690 g",
                "model": "Oppo Reno 5 Pro",                
                "description": ["Co-developed with Sony, a larger sensor area and All Pixel Omni Focus let you shoot like a Pro. 1/1.56 50 MP DOL-HDR OIS+EIS",
                "Qualcomm Snapdragon 865 Get ready to experience superior performance and astoundingly fast 5G¹. speed with the premier Qualcomm Snapdragon 865 processor.",
                "65W SuperVOOC 2.0 5 minutes charging, 4 hours of video playback.",
                "Diamond spectrum: it is oppo's unique technology and gives the phone thousands of color, make it shiny like diamond and 100% fingerprint free",
                "Camera Back- 50MP main +16MP ultra wide + 13MP telephoto + 2MP macro Camera Front- 32MP",
                "5G & 12 GB RAM A smoother overall experience."
            ],
                "discount": 2899,
                "price": 2799,
                "colors": ["black", "silver"],
                "count": 1
            },
            {
                "_id": "22",
                "title": "Nokia 8.3",
                "src": "../images/Nokia/nokia83_blue1.jpg",
                "src2": "../images/Nokia/nokia83_blue2.jpg",
                "src3": "../images/Nokia/nokia83_blue3.jpg",
                "os": "‎Android 10.0",
                "brand": "Nokia",
                "ram": "128 GB",
                "dimension": "‎‎25 x 18.5 x 4.1 cm; 680 Grams",
                "box":"‎Type-C USB cable, Charger, Nokia 8.3 5G device",
                "weight": "‎680 g",
                "model": "Nokia 8.3",                
                "description": ["Amazing quad camera: 64MP + 8MP Ultra-Wide + 2MP Macro + 2MP Depth with ZEISS Cinematic Effects​",
                "PureDisplay with always on HDR, 6.81” FHD+ 20:9​",
                "High performance, long lasting 4500mAh battery with 8GB RAM and 128GB internal storage",
                "Google Assistant Button: Ask questions, see your schedule or even dim the lights with the Google Assistant Button",
                "The only 5G smartphone supporting all 5G bands through the Snapdragon 765G modular platform",
                "Android software upgrades and security updates, guaranteed"
            ],
                "discount": 2099,
                "price": 1299,
                "colors": ["blue"],
                "count": 1
            },
            {
                "_id": "23",
                "title": "Nokia 6.2",
                "src": "../images/Nokia/nokia62_black1.jpg",
                "src2": "../images/Nokia/nokia62_black2.jpg",
                "src3": "../images/Nokia/nokia62_black3.jpg",
                "os": "‎Android 10.0",
                "brand": "Nokia",
                "ram": "128 GB",
                "dimension": "‎25 x 18.5 x 4.1 cm; 680 Grams",
                "box":"‎Type-C USB cable, Charger, Nokia 8.3 5G device",
                "weight": "‎680 g",
                "model": "Nokia 6.2",                
                "description": ["Amazing quad camera: 64MP + 8MP Ultra-Wide + 2MP Macro + 2MP Depth with ZEISS Cinematic Effects​",
                "PureDisplay with always on HDR, 6.81” FHD+ 20:9​",
                "High performance, long lasting 4500mAh battery with 8GB RAM and 128GB internal storage",
                "Google Assistant Button: Ask questions, see your schedule or even dim the lights with the Google Assistant Button",
                "The only 5G smartphone supporting all 5G bands through the Snapdragon 765G modular platform ​",
                "Android software upgrades and security updates, guaranteed"
            ],
                "discount": 2099,
                "price": 1299,
                "colors": ["black"],
                "count": 1
            },
            {
                "_id": "24",
                "title": "Nokia 5.4",
                "src": "../images/Nokia/nokia54_blue1.jpg",
                "src2": "../images/Nokia/nokia54_blue2.jpg",
                "src3": "../images/Nokia/nokia54_blue3.jpg",
                "os": "‎Android",
                "brand": "Nokia",
                "ram": "128 GB",
                "dimension": "‎17.4 x 14.4 x 3.4 cm; 380 Grams",
                "box":"‎Type-C USB cable, Charger",
                "weight": "‎380 g",
                "model": "Nokia 5.4",                
                "description": ["Advanced quad cam with zero shutter lag for stunning, detailed memories you’ll want to share",
                "Innovative cinematic effects for professional looking home videos and 60fps recording for capturing your kids’ new skateboard tricks.",
                "Smarter performance optimized to make sure you stay productive, or just entertaining your kids",
                "6.39” punch hole display for more screen space and small hands compatibility with durable rear cover design and 2 day battery that doesn’t run out when you need it the most"
            ],
                "discount": 699,
                "price": 549,
                "colors": ["blue", "purple"],
                "count": 1
            },
            {
                "_id": "25",
                "title": "Nokia 3.4",
                "src": "../images/Nokia/nokia34_blue1.jpg",
                "src2": "../images/Nokia/nokia34_blue2.jpg",
                "src3": "../images/Nokia/nokia34_blue3.jpg",
                "os": "‎Android",
                "brand": "Nokia",
                "ram": "64 GB",
                "dimension": "‎18.2 x 14.4 x 3.4 cm; 370 Grams",
                "box":"	‎Nokia 3.4 device, Charger, Type-C™ USB cable",
                "weight": "‎370 g",
                "model": "Nokia 3.4",                
                "description": ["Get up to 70% better performance compared to previous generations, thanks to the newest Qualcomm Snapdragon 460 mobile platform.",
                "Enjoy all your favourite entertainment in 6.39” immersive HD+ with punch hole display for maximized screen real estate.",
                "Charge less. Get up to 2 days on a single charge with the Adaptive Battery1.",
                "Capture the perfect shot with triple camera AI imaging, Portrait mode, Night mode and the ultrawide lens.",
                "Take in a truly timeless design that’s built to last, with a durable 3D Nano-textured rear cover and stunning finish in living colors",
                "In the box: Nokia 3.4 device, Quick start guide, Charger, Type-C USB cable, SIM tray tool"
            ],
                "discount": 539,
                "price": 449,
                "colors": ["blue", "grey", "purple"],
                "count": 1
            },
            {
                "_id": "26",
                "title": "Google Pixel 5",
                "src": "../images/Google/googlepixel5_black1.jpg",
                "src2": "../images/Google/googlepixel5_black2.jpg",
                "src3": "../images/Goole/googlepixel5_black3.jpg",
                "os": "‎Android 10.0",
                "brand": "Google",
                "ram": "128 GB",
                "dimension": "‎‎14.4 x 6.94 x 0.82 cm; 143 Grams",
                "box":"	‎USB-C to USB-A Quick Switch Adapter, Box, Phone, 1.0m USB-C to USB-C C1 Cable, SIM Tool, 18W Charger",
                "weight": "‎143 g",
                "model": "Google Pixel 5",                
                "description": ["Built for security, inside and out.",
                "Feel a little closer with fast 5G.",
                "The amazing camera that just keeps getting better.",
                "Qualcomm Snapdragon 765G processor.",
                "A great view. No matter where you are."
            ],
                "discount": 2799,
                "price": 2689,
                "colors": ["black"],
                "count": 1
            },
            {
                "_id": "27",
                "title": "Google Pixel 4a",
                "src": "../images/Google/googlepixel4a_black1.jpg",
                "src2": "../images/Google/googlepixel4a_black2.jpg",
                "src3": "../images/Google/googlepixel4a_black3.jpg",
                "os": "‎Android",
                "brand": "Google",
                "ram": "128 GB",
                "dimension": "‎‎14.48 x 6.86 x 0.76 cm; 140 Grams",
                "box":"‎1 m USB-C to USB-C cable (USB 2.0), Phone, SIM Tool, Box, Quick Start Guide, Quick Switch Adaptor, 18 W USB-C Power Adaptor",
                "weight": "‎140 g",
                "model": "Google Pixel 4a",                
                "description": ["14.76 cm (5.81 inch) Full HD+ Display",
                "12.2MP Rear Camera | 8MP Front Camera",
                "3140 mAh Battery",
                "Qualcomm Snapdragon 730G Processor",
                "OLED Display"
            ],
                "discount": 1500,
                "price": 1489,
                "colors": ["black"],
                "count": 1
            }
        ],
        cart: [],
        total: 0
        
    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


