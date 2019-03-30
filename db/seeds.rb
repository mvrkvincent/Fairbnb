# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Spot.delete_all
User.delete_all

User.create(email: 'smitty@number1.com', 
            fname: 'Smitty', 
            lname: 'Werbenjagermanjensen',
            password: 'Werbenjagermanjensen',
            img_url: 'https://vignette.wikia.nocookie.net/spongebob/images/f/f0/Smitty.jpg/revision/latest?cb=20160213220608'
            )


Spot.create(host_id: 20,
            name: 'Lakeside Highrise 1', 
            accommodation: 'Entire Apartment',
            description: 'Steps from beer, bbq, and breakfast tacos',
            city: 'Austin',
            address: '421 W 3rd St #1, Austin, TX 78701',
            img_url:'http://miyababa.co/wp-content/uploads/2018/07/scroll-to-next-item-west-elm-upholstered-bed-grid-tufted-tapered-leg-review-floral-burst-chandelier-large.jpg',
            lat: 30.266207,
            lng: -97.7503212,
            rate: 1,
            num_guests: 2,   
            num_beds: 1,
            num_baths: 1,
            )

Spot.create(host_id: 20,
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
            ) 
            
            
Spot.create(host_id: 20,
            name: 'Lakeside Highrise 3', 
            accommodation: 'Entire Apartment',
            description: 'Steps from beer, bbq, and breakfast tacos',
            city: 'Austin',
            address: '421 W 3rd St #3, Austin, TX 78701',
            img_url:'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2010/11/3/0/CI-West-Elm_Bedroom-Sheepskin-Rug_s3x4.jpg.rend.hgtvcom.616.822.suffix/1400957251820.jpeg',
            lat: 30.266207,
            lng: -97.7503212,
            rate: 5,
            num_guests: 4,   
            num_beds: 2,
            num_baths: 2,
            )

            Spot.create(host_id: 20,
            name: 'Lakeside Highrise 4', 
            accommodation: 'Private Room',
            description: 'Steps from beer, bbq, and breakfast tacos',
            city: 'Austin',
            address: '421 W 3rd St #4, Austin, TX 78701',
            img_url:'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2010/11/3/0/CI-West-Elm_Bedroom-Sheepskin-Rug_s3x4.jpg.rend.hgtvcom.616.822.suffix/1400957251820.jpeg',
            lat: 30.266207,
            lng: -97.7503212,
            rate: 2,
            num_guests: 2,   
            num_beds: 1,
            num_baths: 1,
            )

Spot.create(host_id: 20,
            name: 'Lakeside Highrise 5', 
            accommodation: 'Shared Room',
            description: 'Steps from beer, bbq, and breakfast tacos',
            city: 'Austin',
            address: '421 W 3rd St #5, Austin, TX 78701',
            img_url:'http://miyababa.co/wp-content/uploads/2018/07/scroll-to-next-item-west-elm-upholstered-bed-grid-tufted-tapered-leg-review-floral-burst-chandelier-large.jpg',
            lat: 30.266207,
            lng: -97.7503212,
            rate: 1,
            num_guests: 1,   
            num_beds: 1,
            num_baths: 1,
            ) 
            
            
Spot.create(host_id: 20,
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
            )

            Spot.create(host_id: 20,
            name: 'Lakeside Highrise 7', 
            accommodation: 'Entire Apartment',
            description: 'Steps from beer, bbq, and breakfast tacos',
            city: 'Austin',
            address: '421 W 3rd St #7, Austin, TX 78701',
            img_url:'http://miyababa.co/wp-content/uploads/2018/07/scroll-to-next-item-west-elm-upholstered-bed-grid-tufted-tapered-leg-review-floral-burst-chandelier-large.jpg',
            lat: 30.266207,
            lng: -97.7503212,
            rate: 1,
            num_guests: 2,   
            num_beds: 1,
            num_baths: 1,
            )

Spot.create(host_id: 20,
            name: 'Lakeside Highrise 8', 
            accommodation: 'Entire Apartment',
            description: 'Steps from beer, bbq, and breakfast tacos',
            city: 'Austin',
            address: '421 W 3rd St #8, Austin, TX 78701',
            img_url:'https://www.dailydreamdecor.com/wp-content/uploads/2016/08/minimal-bedroom-cover-2.jpg',
            lat: 30.266207,
            lng: -97.7503212,
            rate: 4,
            num_guests: 4,   
            num_beds: 2,
            num_baths: 1,
            ) 
            
            
Spot.create(host_id: 20,
            name: 'Lakeside Highrise 9', 
            accommodation: 'Entire Apartment',
            description: 'Steps from beer, bbq, and breakfast tacos',
            city: 'Austin',
            address: '421 W 3rd St #9, Austin, TX 78701',
            img_url:'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2010/11/3/0/CI-West-Elm_Bedroom-Sheepskin-Rug_s3x4.jpg.rend.hgtvcom.616.822.suffix/1400957251820.jpeg',
            lat: 30.266207,
            lng: -97.7503212,
            rate: 5,
            num_guests: 4,   
            num_beds: 2,
            num_baths: 2,
            )