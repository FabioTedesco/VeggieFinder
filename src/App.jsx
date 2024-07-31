import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Recipes from "./components/Recipes";
import Footer from "./components/Footer";

function App() {
  const recipe = [
    {
      id: 1,
      img: "https:images.unsplash.com/photo-1564834744159-ff0ea41ba4b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmVnZXRlcmlhbiUyMHJlY2lwZXxlbnwwfDB8MHx8fDI%3D",
      title: "ricetta",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis assumenda doloribus odio Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis assumenda doloribus odioLorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis assumenda doloribus odio",
    },
    {
      id: 2,
      img: "https:images.unsplash.com/photo-1564834744159-ff0ea41ba4b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmVnZXRlcmlhbiUyMHJlY2lwZXxlbnwwfDB8MHx8fDI%3D",
      title: "ricetta",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis assumenda doloribus odio ",
    },
    {
      id: 3,
      img: "https:images.unsplash.com/photo-1564834744159-ff0ea41ba4b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmVnZXRlcmlhbiUyMHJlY2lwZXxlbnwwfDB8MHx8fDI%3D",
      title: "ricetta",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis assumenda doloribus odio ",
    },
    {
      id: 4,
      img: "https:images.unsplash.com/photo-1564834744159-ff0ea41ba4b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmVnZXRlcmlhbiUyMHJlY2lwZXxlbnwwfDB8MHx8fDI%3D",
      title: "ricetta",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis assumenda doloribus odio ",
    },
    {
      id: 5,
      img: "https:images.unsplash.com/photo-1564834744159-ff0ea41ba4b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmVnZXRlcmlhbiUyMHJlY2lwZXxlbnwwfDB8MHx8fDI%3D",
      title: "ricetta",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis assumenda doloribus odio ",
    },
  ];

  return (
    <div>
      <Navbar />
      <Hero />
      <Recipes recipes={recipe} />
      <Footer />
    </div>
  );
}

export default App;
