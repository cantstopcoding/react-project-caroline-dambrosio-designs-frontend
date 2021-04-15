import React from "react-redux";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import { deleteItem } from "../actions/deleteItem";
import Item from "../components/Item";
import ItemEditOnAccount from "./ItemEditOnAccount";

const Items = (props) => {
  console.log("ITEM", props.items);

  const handleDelete = (item) => {
    // debugger
    props.deleteItem(item.id, item.account_id);
  };

  return (
    <div>
      <h2>My Items:</h2>
      <div>
        {props.items &&
          props.items.map((item) => (
            <li key={item.id}>
              <Link to={`/accounts/${item.account_id}/items/${item.id}`}>
                {item.name} - Price: ${item.price} {item.description}
              </Link>
              <ItemEditOnAccount />
              <button onClick={() => handleDelete(item)}>Delete</button>
            </li>
          ))}
      </div>
    </div>
  );
};

export default connect(null, { deleteItem })(Items);
