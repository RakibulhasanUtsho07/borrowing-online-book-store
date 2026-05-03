import Image from "next/image"

const topRatedAuthors = () => {
  const authors = [
    {
      "rank": 1,
      "author": "William Shakespeare",
      "photo_link": "https://upload.wikimedia.org/wikipedia/commons/a/a2/Shakespeare.jpg",
      "best_book": "Hamlet",
      "description": "Widely regarded as the greatest writer in the English language and the world's pre-eminent dramatist."
    },
    {
      "rank": 2,
      "author": "Agatha Christie",
      "photo_link": "https://m.media-amazon.com/images/M/MV5BMTU3OTYzMzY4NV5BMl5BanBnXkFtZTcwMDIxOTIyOA@@._V1_.jpg",
      "best_book": "And Then There Were None",
      "description": "The best-selling novelist of all time, famous for her 66 detective novels and Hercule Poirot."
    },
    {
      "rank": 3,
      "author": "Leo Tolstoy",
      "photo_link": "https://upload.wikimedia.org/wikipedia/commons/c/c6/L.N.Tolstoy_Prokudin-Gorsky.jpg",
      "best_book": "War and Peace",
      "description": "A master of realist fiction, his works are considered the pinnacle of philosophical and social literature."
    },
    {
      "rank": 4,
      "author": "Jane Austen",
      "photo_link": "https://framerusercontent.com/images/qpM4SgKIACODTygl5gDSpvkbr0.png",
      "best_book": "Pride and Prejudice",
      "description": "Renowned for her social commentary and mastery of irony, bridging the gap between romance and realism."
    },
    {
      "rank": 5,
      "author": "Fyodor Dostoevsky",
      "photo_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfkxqa0mDPDTHjS_TuRzmQOYtsUUL3Xtm1bA&s",
      "best_book": "Crime and Punishment",
      "description": "Explored the darkest corners of the human psyche and the complexities of morality and faith."
    },
    {
      "rank": 6,
      "author": "Charles Dickens",
      "photo_link": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Dickens_Gurney_head.jpg",
      "best_book": "Great Expectations",
      "description": "The literary colossus of the Victorian era, known for creating some of the world's best-known fictional characters."
    },
    {
      "rank": 7,
      "author": "J.R.R. Tolkien",
      "photo_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJOvP4IKTQhRpEAikrwMppg_oXTns-eT5hXA&s",
      "best_book": "The Lord of the Rings",
      "description": "The father of modern high fantasy, having built the incredibly detailed world of Middle-earth."
    },
    {
      "rank": 8,
      "author": "George Orwell",
      "photo_link": "https://upload.wikimedia.org/wikipedia/commons/7/7e/George_Orwell_press_photo.jpg",
      "best_book": "1984",
      "description": "A novelist and critic best known for his lucid prose and biting social and political commentary."
    },
    {
      "rank": 9,
      "author": "Gabriel García Márquez",
      "photo_link": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Gabriel_Garcia_Marquez.jpg",
      "best_book": "One Hundred Years of Solitude",
      "description": "The master of magical realism and one of the most significant authors of the 20th century."
    },
    {
      "rank": 10,
      "author": "Stephen King",
      "photo_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE8-N0JFbvKoplb8K53S3yAmQ0oBjqL4kE1Q&s",
      "best_book": "The Shining",
      "description": "Often called the 'King of Horror,' he is one of the most prolific and popular contemporary writers alive."
    }
  ]
  return authors
}

function TopRatedAuthors() {
  const authors = topRatedAuthors()
  console.log(authors, "author")

  return (
    <div className="space-y-4">
        {
          authors.map((author, ind)=> <div className="bg-gray-100 border rounded shadow-sm card p-5 space-y-2" key={ind}>
              <Image className=" mx-auto rounded-full w-[100px] h-[100px]" src={author?.photo_link} width={100} height={100} alt={author?.author}/>
              <h4 className="text-xl font-semibold text-center">{author?.author}</h4>
              <h4 className="trim rounded-2xl px-4 text-center whitespace-nowrap p-2 bg-green-300 text-white">{author?.best_book}</h4>
          </div>)
        }
    </div>
  )
}

export default TopRatedAuthors
