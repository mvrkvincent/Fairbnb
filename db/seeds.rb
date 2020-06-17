# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Spot.delete_all
Booking.delete_all
Review.delete_all

user1 = User.create(email: 'smitty@number1.com', 
            fname: 'Smitty', 
            lname: 'Werbenjagermanjensen',
            password: 'Werbenjagermanjensen',
            img_url: 'https://vignette.wikia.nocookie.net/spongebob/images/f/f0/Smitty.jpg/revision/latest?cb=20160213220608'
            )

user2 = User.create(email: 'bobby@xkcd.com', 
            fname: 'Bobby', 
            lname: 'Droptables',
            password: 'starwars'
            )
            

Mark = Spot.create(host_id: user1.id,
            name: 'Bushwick Loft', 
            accommodation: 'Private Room',
            description: 'The L train wont run on weekends...or evenings...or weekday afternoons. But why would you leave Brooklyn anyway?',
            city: 'Brooklyn',
            address: 'Brooklyn1',
            img_url:'https://imgs.6sqft.com/wp-content/uploads/2015/10/20142404/olson-living-room.jpg',
            lat: 40.6980535,
            lng: -73.9373694,
            rate: 1,
            num_guests: 1,   
            num_beds: 1,
            num_baths: 2,
            ave_rating: 0
            )

spot12 = Spot.create(host_id: user1.id,
            name: 'East End Couch', 
            accommodation: 'Couch',
            description: 'God save shoreditch',
            city: 'London',
            address: 'Shoreditch #12, London N1 6BY, UK',
            img_url:'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2010/11/3/0/CI-West-Elm_Bedroom-Sheepskin-Rug_s3x4.jpg.rend.hgtvcom.616.822.suffix/1400957251820.jpeg',
            lat: 51.5223516,
            lng: -0.0819905,
            rate: 5,
            num_guests: 4,   
            num_beds: 2,
            num_baths: 2,
            ave_rating: 0
)

Laura = Spot.create(host_id: user1.id,
            name: 'South Texas Cottege', 
            accommodation: 'Private Room',
            description: 'Tamales, mangonadas, and plenty of warm southern hospitality await you. Moms cooking included',
            city: 'San Antonio',
            address: 'San Antonio1',
            img_url:'https://wshg.net/wp-content/uploads/2014/12/OrchardHouse_A1_WHG07D.jpg',
            lat: 29.462235,
            lng: -98.538425,
            rate: 4,
            num_guests: 2,   
            num_beds: 2,
            num_baths: 1,
            ave_rating: 0
            ) 
            
            
Ryan = Spot.create(host_id: user1.id,
            name: 'Cambridge Townhouse', 
            accommodation: 'Shared Room',
            description: 'Lovely home, fresh baked pies, and tours of the second best city on earth',
            city: 'Boston',
            address: 'Boston1',
            img_url:'https://i.pinimg.com/originals/6e/b2/7a/6eb27afb5af513cb4a8efd2a03b6c690.jpg',
            lat: 42.369797,
            lng: -71.084181,
            rate: 5,
            num_guests: 1,   
            num_beds: 1,
            num_baths: 1,
            ave_rating: 0
            )

Ron = Spot.create(host_id: user1.id,
            name: 'Sweet Spot in SA', 
            accommodation: 'Entire Apartment',
            description: 'Spend a summer in a colorful, cozy home in the company of the most majestic creature that ever lived',
            city: 'San Antonio',
            address: 'San Antonio2',
            img_url:'https://www.dailydreamdecor.com/wp-content/uploads/2016/08/minimal-bedroom-cover-2.jpg',
            lat: 29.4564343,
            lng: -98.5052856,
            rate: 2,
            num_guests: 2,   
            num_beds: 1,
            num_baths: 1,
            ave_rating: 0
            )

JC = Spot.create(host_id: user1.id,
            name: 'Downtown Luxe', 
            accommodation: 'Private Room',
             description: 'Live the high life in this sophisticated spot where the wine flows freely and brunch is always on the menu',
            city: 'New York',
            address: 'New York1',
            img_url:'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            lat: 40.7084768,
            lng: -74.0033513,
            rate: 5,
            num_guests: 1,   
            num_beds: 1,
            num_baths: 1,
            ave_rating: 0
            ) 
            
spot6 = Spot.create(host_id: user1.id,
            name: 'Lakeside Highrise 6', 
            accommodation: 'Private Room',
            description: 'Steps from beer, bbq, and breakfast tacos',
            city: 'Austin',
            address: '421 W 3rd St #6, Austin, TX 78701',
            img_url:'https://www.dailydreamdecor.com/wp-content/uploads/2016/08/minimal-bedroom-cover-2.jpg',
            lat: 30.266207,
            lng: -97.7503212,
            rate: 2,
            num_guests: 2,   
            num_beds: 1,
            num_baths: 1,
            ave_rating: 0
            )
            
            
Brett = Spot.create(host_id: user1.id,
            name: 'Big City Break', 
            accommodation: 'Private Room',
            description: 'Minutes from the heart of Kong Kong by ferry, experience natural beauty and plenty of snakes',
            city: 'Hong Kong',
            address: 'Hong Kong1',
            img_url:'https://2c6disor5j62kph211fg7v42-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/Clearwater-Bay-House-Hong-Kong-pool.jpg',
            lat: 22.2178929,
            lng: 114.1072165,
            rate: 2,
            num_guests: 1,   
            num_beds: 1,
            num_baths: 1,
            ave_rating: 0
            )

spot8 = Spot.create(host_id: user1.id,
            name: 'Lakeside Highrise 8', 
            accommodation: 'Entire Apartment',
            description: 'Steps from beer, bbq, and breakfast tacos',
            city: 'Austin',
            address: '421 W 3rd St #8, Austin, TX 78701',
            img_url:'
            https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            lat: 30.266207,
            lng: -97.7503212,
            rate: 5,
            num_guests: 4,   
            num_beds: 2,
            num_baths: 2,
            ave_rating: 0
            )


Blake = Spot.create(host_id: user1.id,
            name: 'Gated Manor', 
            accommodation: 'Entire Apartment',
            description: 'Eggs for breakfast, Eggs for lunch, Eggs for dinner. Enjoy the hosts finest cuisine in a spot fit for a queen',
            city: 'London',
            address: 'London1',
            img_url:'https://www.livinginashoebox.com/wp-content/uploads/2014/11/hanging-loft-bed-apartment-1.jpg',
            lat: 51.5267184,
            lng: -0.0394407,
            rate: 4,
            num_guests: 4,   
            num_beds: 2,
            num_baths: 1,
            ave_rating: 0
            ) 
            
            
Will = Spot.create(host_id: user1.id,
            name: 'Chinatown Walk-up', 
            accommodation: 'Couch',
            description: 'Stay in the center of it all and enjoy the best food (and people watching) in Manhattan',
            city: 'New York',
            address: 'New York3',
            img_url:'https://t-ec.bstatic.com/images/hotel/max1024x768/134/134503030.jpg',
            lat: 40.716374,
            lng: -74.0010798,
            rate: 2,
            num_guests: 4,   
            num_beds: 1,
            num_baths: 1,
            ave_rating: 0
            )

spot1 = Spot.create(host_id: user1.id,
            name: 'Bushwick Loft 1', 
            accommodation: 'Entire Apartment',
            description: 'Dollar slices and drunks',
            city: 'New York',
            address: '34 Melrose St #1, Brooklyn, NY 11206',
            img_url:'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            lat: 40.6980535,
            lng: -73.9373694,
            rate: 1,
            num_guests: 2,   
            num_beds: 1,
            num_baths: 1,
            ave_rating: 0
            )


Cameron = Spot.create(host_id: user1.id,
            name: 'South Austin Sunshine', 
            accommodation: 'Private Room',
            description: 'Steps from beer, bbq, and breakfast tacos enjoy Austin the way it was meant to be',
            city: 'Austin',
            address: 'Austin1',
            img_url:'https://inhabitat.com/wp-content/blogs.dir/1/files/2015/11/Pavonetti-Architecture-Garden-State-Home.jpg',
            lat: 30.2287612,
            lng: -97.7691618,
            rate: 1,
            num_guests: 2,   
            num_beds: 1,
            num_baths: 1,
            ave_rating: 0
            )

Justin = Spot.create(host_id: user1.id,
            name: 'Harlem Highlife', 
            accommodation: 'Shared Room',
            description: 'Venture uptown for boozy brunches, drag shows, nightlife, and the best queens in town',
            city: 'New York',
            address: 'New York4',
            img_url:'https://images.pexels.com/photos/271805/pexels-photo-271805.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            lat: 40.8070779,
            lng: -73.9515882,
            rate: 3,
            num_guests: 1,   
            num_beds: 1,
            num_baths: 1,
            ave_rating: 0
            ) 

spot2 = Spot.create(host_id: user1.id,
            name: 'Lakeside Highrise 2', 
            accommodation: 'Entire Apartment',
            description: 'Steps from beer, bbq, and breakfast tacos',
            city: 'Austin',
            address: '421 W 3rd St #2, Austin, TX 78701',
            img_url:'https://www.dailydreamdecor.com/wp-content/uploads/2016/08/minimal-bedroom-cover-2.jpg',
            lat: 30.266207,
            lng: -97.7503212,
            rate: 4,
            num_guests: 4,   
            num_beds: 2,
            num_baths: 1,
            ave_rating: 0
            ) 
            
            
AA = Spot.create(host_id: user1.id,
            name: 'Camp Academy', 
            accommodation: 'Office Chair',
            description: 'How do you solve a problem like Maria? or unemployment? 12 weeks in Manhattan with plenty of coffee, good company, and the occasional beer. Bananas are strictly prohibited',
            city: 'New York',
            address: 'New York5',
            img_url:'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2010/11/3/0/CI-West-Elm_Bedroom-Sheepskin-Rug_s3x4.jpg.rend.hgtvcom.616.822.suffix/1400957251820.jpeg',
            lat: 40.7513597,
            lng: -73.986111,
            rate: 200,
            num_guests: 40,   
            num_beds: 0,
            num_baths: 2,
            ave_rating: 0
)

Jobs = Spot.create(host_id: user1.id,
            name: 'Tenderloin Manor', 
            accommodation: 'Bunk Beds',
            description: 'Looking for a place to crash while job hunting? Look no further. Located in the heart of SF, you too can live like a king in a 4 bedroom apartment with 15 bunk beds and 6 cats',
            city: 'San Francisco',
            address: 'San Francisco1',
            img_url:'https://www.madmonkeyhostels.com/wp-content/uploads/2017/05/DSC_0231.jpg',
            lat: 37.7839293,
            lng: -122.4218072,
            rate: 50,
            num_guests: 15,   
            num_beds: 15,
            num_baths: 1,
            ave_rating: 0
)




            
            
spot3 = Spot.create(host_id: user1.id,
            name: 'Bushwick Loft 3', 
            accommodation: 'Entire Apartment',
            description: 'Dollar slices and drunks',
            city: 'New York',
            address: '34 Melrose St #2, Brooklyn, NY 11206',
            img_url:'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2010/11/3/0/CI-West-Elm_Bedroom-Sheepskin-Rug_s3x4.jpg.rend.hgtvcom.616.822.suffix/1400957251820.jpeg',
            lat: 40.6980535,
            lng: -73.9373694,
            rate: 5,
            num_guests: 4,   
            num_beds: 2,
            num_baths: 2,
            ave_rating: 0
            )

spot5 = Spot.create(host_id: user1.id,
            name: 'Lakeside Highrise 4', 
            accommodation: 'Private Room',
            description: 'Steps from beer, bbq, and breakfast tacos',
            city: 'Austin',
            address: '421 W 3rd St #4, Austin, TX 78701',
            img_url:'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            lat: 30.266207,
            lng: -97.7503212,
            rate: 2,
            num_guests: 2,   
            num_beds: 1,
            num_baths: 1,
            ave_rating: 0
            )

spot5 = Spot.create(host_id: user1.id,
            name: 'Bushwick Loft 5', 
            accommodation: 'Shared Room',
             description: 'Dollar slices and drunks',
            city: 'New York',
            address: '34 Melrose St #3, Brooklyn, NY 11206',
            img_url:'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            lat: 40.6980535,
            lng: -73.9373694,
            rate: 1,
            num_guests: 1,   
            num_beds: 1,
            num_baths: 1,
            ave_rating: 0
            ) 
            
            



spot7 = Spot.create(host_id: user1.id,
            name: 'Lakeside Highrise 7', 
            accommodation: 'Entire Apartment',
            description: 'Steps from beer, bbq, and breakfast tacos',
            city: 'Austin',
            address: '421 W 3rd St #7, Austin, TX 78701',
            img_url:'http://wifewithwanderlust.me/wp-content/uploads/2018/04/dark-bedroom-dark-room-ideas-richly-colored-dark-bedroom-designs-inspiration-hall-room-design-bedrooms-style-pretty-ideas-dark-cozy-bedroom-colors.jpg',
            lat: 30.266207,
            lng: -97.7503212,
            rate: 4,
            num_guests: 4,   
            num_beds: 2,
            num_baths: 1,
            ave_rating: 0
            ) 
            
            



spot9 = Spot.create(host_id: user1.id,
            name: 'Michigan Avenue Penthouse', 
            accommodation: 'Entire Apartment',
            description: 'Chicago, what else can we say',
            city: 'Chicago',
            address: '421 W 3rd St #9, Austin, TX 78701',
            img_url:'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            lat: 41.8165421,
            lng: -87.6252152,
            rate: 1,
            num_guests: 2,   
            num_beds: 1,
            num_baths: 1,
            ave_rating: 0
            )

spot10 = Spot.create(host_id: user1.id,
            name: 'Stadium Central', 
            accommodation: 'Private Room',
            description: 'Catch a ballgame, and then a cab',
            city: 'New York',
            address: '421 W 3rd St #10, Austin, TX 78701',
            img_url:'https://www.dailydreamdecor.com/wp-content/uploads/2016/08/minimal-bedroom-cover-2.jpg',
            lat: 40.8296426,
            lng: -73.9283685,
            rate: 4,
            num_guests: 4,   
            num_beds: 2,
            num_baths: 1,
            ave_rating: 0
            ) 
            
            
spot11 = Spot.create(host_id: user1.id,
            name: 'Lakeside Highrise 11', 
            accommodation: 'Entire Apartment',
            description: 'Steps from beer, bbq, and breakfast tacos',
            city: 'Austin',
            address: '421 W 3rd St #11, Austin, TX 78701',
            img_url:'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2010/11/3/0/CI-West-Elm_Bedroom-Sheepskin-Rug_s3x4.jpg.rend.hgtvcom.616.822.suffix/1400957251820.jpeg',
            lat: 30.3076859,
            lng: -97.89383,
            rate: 5,
            num_guests: 4,   
            num_beds: 2,
            num_baths: 2,
            ave_rating: 0
)


