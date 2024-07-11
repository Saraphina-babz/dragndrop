import "../styles/Home.css";
import React, { useState, useEffect } from "react";
import { FadeLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableUser } from "../components/SortableUser";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";



function Home() {
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);

  const [Items, setItems] = useState([
    {
      id: 1,
      tag: "First picture",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.YxstgBqqSQbRO14THxWXEAHaEo&pid=Api&P=0&h=220",
    },
    {
      id: 2,
      tag: "Second picture",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.uvLp3WBj-fSfmeKyyxvsdwHaEo&pid=Api&P=0&h=220",
    },

    {
      id: 3,
      tag: "Third picture",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.q1STB3YqkMvCON6QQVAoegHaF7&pid=Api&P=0&h=220",
    },
    {
      id: 4,
      tag: "Fourth picture",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.FPmbUcb50Uw2irlK5PYmZAHaF7&pid=Api&P=0&h=220",
    },
    {
      id: 5,
      tag: "Fifth picture",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.xcYKkSST5F1QcuWvspJYQQHaEo&pid=Api&P=0&h=220",
    },
    {
      id: 6,
      tag: "Sixth picture",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.qirmcuwmkP0rvWABdDiPmQHaEo&pid=Api&P=0&h=220",
    },
    {
      id: 7,
      tag: "Seventh picture",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.dP-ErzyyOC4o5w5cmPb05AHaFj&pid=Api&P=0&h=220",
    },
    {
      id: 8,
      tag: "Eigth picture",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.38_l025VfdpPryTEs5uV0gHaFj&pid=Api&P=0&h=220",
    },
  ]);

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }
    setItems((Items) => {
      const oldIndex = Items.findIndex((item) => item.id === active.id);
      const newIndex = Items.findIndex((item) => item.id === over.id);
      return arrayMove(Items, oldIndex, newIndex);
    });
  };
  //for search

  const SearchItem = (event) => {
    setFilter(event.target.value);
  };
  const dataSearch = Items.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  //for the loader
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="home">
      <div className="nav">
        <h1 className="imgG mt-3">Image Gallery</h1>

        <div className="search">
          <input
            type="text"
            className="search w-100"
            placeholder="Search Pictures"
            value={filter}
            onChange={SearchItem.bind(this)}
          />
        </div>
        <div className="login">
          <Link to="/login">
            <button>Log in</button>
          </Link>
        </div>
      </div>
      <hr />

      <div className="cardWrapper">
        {loading ? (
          <FadeLoader color={"rgb(99, 96, 96)"} loading={loading} size={150} />
        ) : (
          <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
            <SortableContext
              items={Items}
              strategy={verticalListSortingStrategy}
            >
              {dataSearch.map((item) => (
                <SortableUser key={item.id} item={item} />
              ))}
            </SortableContext>
          </DndContext>
        )}
      </div>
    </div>
  );
}

export default Home;
