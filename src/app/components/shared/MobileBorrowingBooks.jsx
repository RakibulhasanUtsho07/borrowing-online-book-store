import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import NotFoundPage from './NotFoundPage'
import Link from 'next/link'

function MobileBorrowingBooks() {
    const books =[
        {
            "id": "bk-str-9x1",
            "title": "Echoes of the Forgotten",
            "author": "Elena Thorne",
            "description": "In a world where memories are traded like currency, a young archivist discovers a hidden vault containing the lost history of a civilization that supposedly never existed. As she delves deeper into the forbidden records, she realizes that her own past is intricately tied to the collapse of the old world. The narrative explores themes of identity, the fallibility of human memory, and the price of absolute truth in a society built on convenient lies. Her journey takes her through crumbling ruins and high-stakes social circles where one wrong word can result in total erasure.",
            "category": "Story",
            "available_quantity": 12,
            "image_url": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1691569088i/195972975.jpg",
            "rating": 4.8,
            "published_year": 2024,
            "language": "English"
        },
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
        {
            "id": "bk-str-8m3",
            "title": "The Biological Blueprint",
            "author": "Sarah Jenkins",
            "description": "A deep dive into the recent breakthroughs in CRISPR technology and synthetic biology. Jenkins explains the complex mechanisms of gene editing in a way that is accessible yet scientifically rigorous, illustrating how we are on the verge of eradicating hereditary diseases. The book also tackles the heavy ethical implications of 'designer humans' and the ecological risks of releasing gene-drive organisms into the wild. It is a cautionary yet hopeful look at how humanity is finally taking the reins of its own evolution, for better or for worse, supported by peer-reviewed data and interviews with leading geneticists.",
            "category": "Science",
            "available_quantity": 8,
            "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaV8zLJ75TGWpMO-Z99vckyEtncCaXn0OBuw&s",
            "isbn": "978-3-16-148410-0",
            "publisher": "Vertex Press",
            "published_year": 2024,
            "tags": ["Genetics", "Ethics", "Biology"]
        },
        {
            "id": "bk-str-11k4",
            "title": "Silicon Shadows",
            "author": "Marcus Vane",
            "description": "Set in a neon-drenched metropolis, this cyberpunk thriller follows a freelance 'data-specter' who specializes in retrieving deleted information from the digital afterlife. When he stumbles upon a file containing the consciousness of a murdered tech CEO, he becomes the target of a global conglomerate determined to keep the secret of digital immortality under wraps. The story is a gritty reflection on the loss of privacy in an ultra-connected age and the blurring lines between humanity and the machines we create to mimic ourselves.",
            "category": "Story",
            "available_quantity": 25,
            "image_url": "https://m.media-amazon.com/images/I/711tsLK8oEL._UF1000,1000_QL80_.jpg",
            "series": "The Glitch Chronicles",
            "hardcover_available": true,
            "published_year": 2024,
            "audiobook_length": "14h 20m"
        },
        {
            "id": "bk-str-14p5",
            "title": "Edge Computing 101",
            "author": "Liam Chen",
            "description": "As the Internet of Things (IoT) expands, the need for processing power at the 'edge' of the network becomes critical. This book serves as a foundational guide for developers looking to build low-latency applications that process data locally rather than relying on centralized cloud servers. It includes detailed case studies on smart cities, autonomous vehicles, and industrial automation. Readers will learn about 5G integration, micro-data centers, and security protocols necessary to protect decentralized networks from increasingly sophisticated cyberattacks in an era of ubiquitous connectivity.",
            "category": "Tech",
            "available_quantity": 15,
            "image_url": "https://m.media-amazon.com/images/I/715w3Q4XcML.jpg",
            "skill_level": "Intermediate",
            "published_year": 2024,
            "tools_covered": ["Docker", "Kubernetes", "AWS Greengrass"],
            "certification_aligned": true
        },
        {
            "id": "bk-str-19z6",
            "title": "The Last Glacier",
            "author": "Dr. Helena Wu",
            "description": "A hauntingly beautiful photographic and scientific record of the world's vanishing ice caps. Dr. Wu spent a decade traveling to the most remote corners of the Arctic and Antarctic to document the rapid changes occurring in our cryosphere. The book combines breathtaking visuals with rigorous climate data, explaining the 'albedo effect' and how the melting of polar ice triggers feedback loops that accelerate global warming. It is both a scientific document and a call to action, reminding us of the fragile beauty that is slipping through our fingers as the planet warms.",
            "category": "Science",
            "available_quantity": 3,
            "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyWt55DH6bBvPRfhj4Umer5bNm5mGtOEHrPA&s",
            "awards": ["Green Earth Book Award"],
            "published_year": 2024,
            "paper_type": "Recycled Glossy",
            "dimensions": "12x10 inches"
        },
        {
            "id": "bk-tch-2a1",
            "title": "Full Stack Mastery",
            "author": "Devin Rivers",
            "description": "A modern guide to becoming a proficient full-stack developer in the current ecosystem. This book moves past the basics and focuses on building scalable, production-ready applications using React, Node.js, and PostgreSQL. It covers advanced topics such as CI/CD pipelines, containerization, and serverless architectures. The author emphasizes the 'why' behind architectural decisions, helping developers choose the right tool for the job. With a focus on clean code and test-driven development, this is the ultimate roadmap for anyone wanting to level up their engineering career.",
            "category": "Tech",
            "available_quantity": 20,
            "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLal77tRssd2TT5tk3z65KYMkJjDnAFjfVXA&s",
            "github_repo_link": "https://github.com/example/fullstack-mastery",
            "update_frequency": "Yearly",
            "published_year": 2024,
            "video_course_included": true
        },
        {
            "id": "bk-tch-5b2",
            "title": "Midnight in the Archive",
            "author": "Julian Black",
            "description": "A gothic mystery set in a sprawling, infinite library where the books are said to whisper to those who listen long enough. When a young scholar is tasked with cataloging a mysterious donation, he discovers a series of journals that predict events that haven't happened yet. As he follows the clues left by a predecessor who disappeared forty years ago, he realizes the library itself is a sentient entity with a dark hunger for stories. It is a atmospheric exploration of the power of literature and the obsession that can come from chasing the unknown.",
            "category": "Story",
            "available_quantity": 10,
            "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6x2OQT59krvMllXs_2IP8-7KhqHofOyg4Vg&s",
            "genre": "Gothic Mystery",
            "published_year": 2024,
            "paperback_price": 14.99,
            "ebook_price": 9.99
        },
        {
            "id": "bk-tch-7c3",
            "title": "Astrophysics of the Void",
            "author": "Neil deGrasse Tyson (Pseudonym)",
            "description": "A fascinating journey into the heart of black holes, dark matter, and the vast emptiness of the cosmos. This book simplifies the most complex theories of general relativity and quantum mechanics to explain what happens at the event horizon and beyond. It discusses the possibility of a 'multiverse' and what the heat death of the universe might actually look like. Filled with wit and wonder, it aims to answer the biggest questions humanity has ever asked: Where did we come from, and where is it all going? The text is supplemented by beautiful 3D renders of celestial phenomena.",
            "category": "Science",
            "available_quantity": 30,
            "published_year": 2024,
            "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYdnlHGXtTO-wV33PO0PPR3u8voLXOfepo_w&s",
            "best_seller": true,
            "reading_age": "14+",
            "glossary_included": true
        },
        {
            "id": "bk-tch-10d4",
            "title": "The Rust Revolution",
            "author": "Clara Schmidt",
            "description": "An in-depth look at why the Rust programming language is taking the software world by storm. Schmidt explains the unique memory safety guarantees provided by the borrow checker without the need for a garbage collector. The book walks through building high-performance systems software, from command-line tools to web servers. It also discusses the growing adoption of Rust in major tech companies and its role in the future of WebAssembly. This is an essential read for C++ developers looking for a safer alternative and for anyone interested in high-concurrency systems programming.",
            "category": "Tech",
            "available_quantity": 7,
            "published_year": 2024,
            "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQiiaVLehM9vcLbcbRcdQwsqJyunfW84Fm-Q&s",
            "compiler_version": "1.75",
            "community_rating": "5/5",
            "print_type": "On-demand"
        },
        {
            "id": "bk-tch-13e5",
            "title": "Gardens of the Moon",
            "author": "Steven Erikson",
            "description": "A sprawling epic fantasy that introduces readers to the Malazan Empire, a world of complex magic, ancient gods, and war-weary soldiers. The story follows several factions as they converge on the city of Pale, where a legendary battle is brewing. Unlike traditional fantasy, this narrative avoids clear-cut heroes and villains, focusing instead on the gritty reality of life in a world where power is always shifting and the price of magic is often blood. It is a dense, rewarding read for those who enjoy intricate world-building and philosophical depth in their fiction.",
            "category": "Story",
            "available_quantity": 18,
            "published_year": 2024,
            "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWmxcBQt9T4rClMa5_XBESLmom6TU238Emow&s",
            "word_count": 209000,
            "audio_narrator": "Ralph Lister",
            "map_included": true
        },
        {
            "id": "bk-tch-16f6",
            "title": "Neuroplasticity: Rewiring the Mind",
            "author": "Dr. Andrew Huberman",
            "description": "How do our brains change in response to experience? This book synthesizes decades of neuroscience research to explain the mechanisms of neuroplasticity. It provides practical protocols for improving focus, memory, and emotional regulation by leveraging the brain's inherent ability to reorganize its neural connections. From the role of dopamine in motivation to the impact of sleep on cognitive health, Dr. Huberman offers a science-backed toolkit for optimizing human performance. It challenges the old notion that the brain is 'fixed' after childhood and shows how we can keep learning throughout our lives.",
            "category": "Science",
            "available_quantity": 40,
            "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWue4Hk-G-012XrR32eODgbSY1yqoGJ6PFWw&s",
            "reference_count": 150,
            "published_year": 2024,
            "diagrams_count": 45,
            "bestseller_rank": 1
        },
        {
            "id": "bk-tch-18g7",
            "title": "The API Design Handbook",
            "author": "Sanjay Gupta",
            "description": "Designing a great API is more of an art than a science. This book covers the principles of RESTful design, GraphQL, and gRPC, focusing on developer experience (DX) and long-term maintainability. Gupta discusses versioning strategies, authentication patterns (OAuth2, JWT), and the importance of thorough documentation. Through real-world examples from companies like Stripe and Twilio, readers will learn how to build APIs that are intuitive, secure, and capable of handling millions of requests per day. It is an indispensable resource for backend engineers and product managers alike.",
            "category": "Tech",
            "available_quantity": 14,
            "published_year": 2024,
            "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUuPcigUF6lk3hikZ4l_Z2r2UY7dap-MyW-Q&s",
            "case_studies": 12,
            "interactive_examples": true,
            "license": "Single User"
        },
        {
            "id": "bk-sci-3x1",
            "title": "Under the Desert Stars",
            "author": "Amira Al-Sayed",
            "description": "A multi-generational saga set in the heart of the Arabian Peninsula. The story spans from the early 20th century to the modern day, tracing the lives of a family of nomadic bedouins as they transition into the age of oil and urban sprawl. It is a rich tapestry of cultural heritage, forbidden love, and the tension between ancient traditions and the relentless march of modernity. Through the eyes of three different women, the author explores how identity is shaped by the land we inhabit and the stories we pass down to those who come after us.",
            "category": "Story",
            "available_quantity": 9,
            "image_url": "https://m.media-amazon.com/images/I/91qn841i-CL._UF1000,1000_QL80_.jpg",
            "translator": "N/A (Original English)",
            "historical_accuracy_rating": "High",
            "published_year": 2024,
            "awards": ["Booker Longlist"]
        },
        {
            "id": "bk-sci-6y2",
            "title": "Principles of Deep Learning",
            "author": "Ian Goodfellow",
            "description": "The definitive textbook on deep learning, covering the mathematical and conceptual foundations of linear algebra, probability theory, and numerical optimization as they apply to neural networks. This book provides a rigorous treatment of convolutional networks, recurrent networks, and generative modeling. It is used by top universities worldwide and is widely considered the 'bible' of the field. Whether you are a student or a seasoned practitioner, this book offers the depth required to truly understand how modern AI systems learn from data and make predictions in complex environments.",
            "category": "Science",
            "available_quantity": 11,
            "image_url": "https://m.media-amazon.com/images/I/511X0SSqYBL._AC_UF1000,1000_QL80_.jpg",
            "difficulty": "Advanced",
            "published_year": 2024,
            "companion_website": "https://deeplearningbook.org",
            "weight": "2.5kg"
        },
        {
            "id": "bk-sci-9z3",
            "title": "Cybersecurity Threats 2026",
            "author": "Kevin Mitnick (Legacy Edition)",
            "description": "A forward-looking analysis of the evolving threat landscape. This edition focuses on AI-driven phishing attacks, deepfake identity theft, and the vulnerabilities inherent in the growing 'Internet of Everything.' It provides actionable advice for CISOs and security analysts to harden their infrastructure against state-sponsored actors and decentralized hacker collectives. The book emphasizes the 'human element' of security, arguing that social engineering remains the most potent weapon in a hacker's arsenal, regardless of how advanced our firewalls and encryption algorithms become.",
            "category": "Tech",
            "available_quantity": 6,
            "image_url": "https://m.media-amazon.com/images/I/61j11NnRJZL._UF1000,1000_QL80_.jpg",
            "threat_model": "STRIDE",
            "published_year": 2024,
            "is_classified_info": false,
            "last_updated": "2026-01-15"
        },
        {
            "id": "bk-sci-12w4",
            "title": "The Song of the Forest",
            "author": "Oliver Sacks",
            "description": "A collection of essays exploring the profound connection between the human brain and the natural world. Sacks uses his characteristic blend of clinical observation and literary flair to describe how exposure to nature can heal psychological trauma and enhance cognitive function. He visits botanical gardens, ancient forests, and urban parks to interview people whose lives have been transformed by 'green therapy.' It is a poetic defense of the environment and a reminder that we are biological beings who need the complexity of the wild to maintain our mental and spiritual health.",
            "category": "Science",
            "available_quantity": 13,
            "image_url": "https://m.media-amazon.com/images/I/71cRaQuU66L._AC_UF1000,1000_QL80_.jpg",
            "posthumous": true,
            "editor": "Kate Edgar",
            "published_year": 2024,
            "theme": "Biophilia"
        },
        {
            "id": "bk-sci-15q5",
            "title": "Mastering Go",
            "author": "Mihalis Tsoukalos",
            "description": "Go (Golang) has become the language of choice for cloud-native development. This book guides you through the intricacies of Go's concurrency model, its powerful type system, and its minimalist philosophy. From writing efficient microservices to working with low-level system calls, this book covers it all. It includes practical examples of building high-performance CLI tools and web servers using the standard library. By the end of the book, you will have a deep understanding of Go's internals and be ready to contribute to large-scale open-source projects or build your own scalable backend systems.",
            "category": "Tech",
            "available_quantity": 17,
            "image_url": "https://m.media-amazon.com/images/I/714VDMA1+aL._AC_UF1000,1000_QL80_.jpg",
            "version_covered": "1.22",
            "exercises_included": true,
            "published_year": 2024,
            "ebook_format": "EPUB/PDF"
        },
        {
            "id": "bk-sci-17r6",
            "title": "The Martian Chronicles",
            "author": "Ray Bradbury",
            "description": "A classic of science fiction that tells the story of humanity's repeated attempts to colonize Mars. Through a series of loosely connected vignettes, Bradbury explores the themes of colonialism, environmental destruction, and the loss of cultural identity. The Martians are depicted as a fragile, poetic race whose civilization is inadvertently destroyed by the diseases and greed of the human settlers. It is a work of social commentary disguised as space travel, written in a lyrical style that remains as powerful and relevant today as it was when it was first published in 1950.",
            "category": "Story",
            "available_quantity": 22,
            "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOsRm8KPteYAD7Ix90-xL4CDbLanEYAVwwww&s",
            "published_year": 1950,
            "is_classic": true,
            "movie_adaptation": "Available"
        },
        {
            "id": "bk-sci-20s7",
            "title": "The Chemistry of Everything",
            "author": "Dr. Peter Atkins",
            "description": "Why is the sky blue? How does aspirin stop pain? What makes a diamond hard? Dr. Atkins answers these questions and more by explaining the fundamental chemical reactions that govern our daily lives. This book avoids dry formulas and instead focuses on the beauty and logic of the molecular world. From the food we eat to the technology we use, everything is a result of atoms interacting in specific ways. It is an engaging introduction to chemistry for the curious mind, filled with 'aha!' moments that will change the way you look at the world around you forever.",
            "category": "Science",
            "available_quantity": 35,
            "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3QzXSSJUuWzYP4NbWBonJH-4qxTQcEG-PbA&s",
            "experiment_guides": 10,
            "color_illustrations": true,
            "published_year": 2024,
            "target_audience": "General Public"
        }
    ]
  return (
    <div className='p-2 space-y-5'>
          { books.length === 0 ?
           <div>
            <NotFoundPage></NotFoundPage>
           </div>:
            books.map((book, ind) =>
              <div key={ind} className='space-y-4'>
                <span className='flex gap-2 mb-1'>
                  <p className='font-semibold bg-green-400 text-white px-4 rounded-2xl p-1'>{book.category}</p>
                  <div className='flex gap-1 bg-purple-200 px-4 p-1 rounded-2xl'>
                    <FaStar className='my-auto text-yellow-400' />
                    <p className=' font-medium'>5.00</p>
                  </div>
                </span>
                <h3 className='text-3xl font-bold py-5 '>{book?.title}</h3>
                <div className='bg-blue-100 rounded '>
                  <Image className='rounded mx-auto py-5' src={book?.image_url} width={250} height={300} alt={book?.title} />
                </div>
                <p className='text-xl font-bold'><span>Author :</span> <span className=''>{book?.author}</span></p>
                <p > <span className='font-medium'>Available : </span> {book?.available_quantity}</p>
                <p className='line-clamp-2 pl-2'>{book?.description}</p>
                <Link href={`/bookdetails/${book?.id}`} className='btn bg-amber-500 px-4 text-white'>Read More</Link>
    
    
                <hr className='border  border-gray-400 mb-10' />
              </div>
    
            )
          }
        </div>
  )
}

export default MobileBorrowingBooks
