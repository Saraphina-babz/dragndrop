import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";




export const SortableUser = ({ item}) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({ id: item.id });
  
    const style = {
      transition,
      transform: CSS.Transform.toString(transform),
    };
    
  
    return (
      <div
        
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        key={item.id}
        className="col-11 col-md-6 col-lg-3 mx-0 mb-4"
      >
        <div className="card p-0 overflow-hidden h-100 shadow m-2">
          <img src={item.image} className="card-img-top" alt="img" />
          <div className="card-body">
            <h5 className="card-title">{item.tag}</h5>
          </div>
        </div>
      </div>
    );
};

