import * as React from "react";
import Item from "./Item";
import { fetchUsers,deleteUser } from "./helpers";
import ItemDetails from "./Itemdetails";
import MaterialTableComponent from "../UI/MaterialTable";
import RadioGroupWithLabels from "../UI/RadioGroupWithLabels";

interface IAppProps {}

const List: React.FC<IAppProps> = (props) => {
  const [members, setMembers] = React.useState("");
  const [itemForm, setItemForm] = React.useState(false);
  const [formStatus, setFormStatus] = React.useState("add");
  const [selectedMember, setselectedMember] = React.useState({});

  // Similar to componentDidMount and componentDidUpdate:
  React.useEffect(() => {
    fetchData();
  }, []);

  const excludedList = ["claims"];
  const excludeFormObject = (data, excludeList) => {
    excludeList.forEach((prop) => {
      data[prop] && delete data[prop];
    });
    return data;
  };

  const fetchData = () =>
    fetchUsers().then((response) => {
      let columns = [];
      let data = [];
      const colums1 = excludeFormObject(response[0], excludedList);
      Object.keys(colums1).map((key, i) => {
        console.log(colums1[key]);
        excludeFormObject;
        const type: any = typeof colums1[key];
        if (type === "object") {
          console.log(...colums1[key]);
          // colums1[key].unshift("Select");
          const select = {...colums1[key]}
          console.log("SELECT",select);
          return columns.push({ title: key.toUpperCase(), field: key, lookup: select});
        }
        columns.push({ title: key.toUpperCase(), field: key });
      });
      response.map((d, i) => {
        const data1 = excludeFormObject(d, excludedList);
        data.push(data1);
      });
      let setData = {
        columns: columns,
        data: data,
      };
      console.log("USERTABLE", setData);
      setMembers(setData);
    });

  const handleAdditem = (e) => {
    e.preventDefault();
    setItemForm(true);
    setFormStatus("add");
    AddMember();
  };

  const handleSelectedItem = (id: string) => {
    let selectedItem = members.filter((member) => {
      return member.MembersID === id;
    });
    console.log("SelectedItem", selectedItem);
    setFormStatus("edit");
    setselectedMember(selectedItem[0]);
    setItemForm(true);
  };

  return (
    <div>
      {console.log("members", members)}
      {members ? (
        <>
          <br />
          {/* <RadioGroupWithLabels/> */}
          <MaterialTableComponent members={members} deleteuser={deleteUser} />
        </>
      ) : (
        <div>Loading Data..</div>
      )}

      {/* {itemForm ? (
     <ItemDetails members={members[0]} member={selectedMember} status={formStatus} />
      ) : null} */}
    </div>
  );
};

export default List;
