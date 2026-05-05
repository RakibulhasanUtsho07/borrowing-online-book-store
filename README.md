
project name: Borrowing Book

#navbar
    --divide 3 section
        ....logo
        ....links
        ....login/logout

    --functionallity
        ....click banner go to home page
        ....links/ click link to go three different page
        ....if user login show name and logout button. if user not found show login button

#banner 
    --only a image

#home page main section
    ---divide to 3 part
        ... category button
        ... selected categories books show
        ... social and media part and show top class authors
    --functionallity
        .... when you click a category button we show books from this category
        .... when you click google login button google show your email for login 
#footer
    --- we create a simple footer section logo address and social medias


#all books page
    ---search bar and filter 
    --- all books
        ...we are searching books name and author name
        ... we filtered books with category wise
#mt profile(private route)
    ---only 2 items 
        .... profile picture 
        .... name
        functionallity
            ---if user login show profile picture and name if not show blank avatar and "guest account"
            ---if user login thay will change there name and profile picture
#books details (private route)
    --- when user click read more button if user login thay go to books details page if not thay rederict to login page 
    ---dynamically route using id

    {
            "id": "bk-str-4v2",
            "title": "Quantum Leap: Neural Networks",
            "author": "Dr. Aris Thorne",
            "description": "An exhaustive exploration of the intersection between quantum computing and artificial neural networks. This book provides a comprehensive breakdown of how quantum entanglement can be leveraged to accelerate deep learning processes, potentially solving optimization problems that are currently insurmountable for classical hardware. It covers the mathematical foundations of qubits, the architecture of quantum gates, and provides practical Python-based simulations for researchers looking to stay at the forefront of the next technological revolution. Perfect for senior engineers and data scientists seeking to understand the hardware of the 2030s.",
            "category": "Tech",
            "available_quantity": 5,
            "image_url": "https://media.springernature.com/w153/springer-static/cover/book/978-981-95-1683-4.jpg",
            "edition": "2nd Edition",
            "published_year": 2024,
            "format": "Hardcover",
            "pages": 540
        },
        --use this type of json file to create this
#authentication 
    ---- 3 authentication method are available 
    ---- use batter auth
        ...login 
        ...register
        ...and social

#register page
    --- it is first to create your account 
        ....you are not use same email address to creating account
#login page
    ---use registered email and password to login
