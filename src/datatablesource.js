export const userColumns = [
    // { fied: "id" , headerName:"ID", width: 70},
    { 
        field: "user", 
        headerName: "Usuário", 
        width: 230, 
        renderCell : (params)=> {
        return (
        <div className= "cellWithImg">
            <img className="cellImg" src ={params.row.img} alt="avatar"/>
            <p>{params.row.username}</p>
        </div>
        );
    },   
    },
   {
    field: "email", headerName: "Email",
    width:230,
   },
   
   {
    field: "age", headerName: "Idade",
    width:100,
   },
   {
    field: "status", headerName: "Status",
    width:100,
    renderCell:(params)=>{
        return (
            <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        )
    }
   },
 
];

export const userRows = [
    {
        id: 1,
        username: "Bátima",
        img:"https://cdn-icons-png.flaticon.com/512/1674/1674291.png",
        status: "ativo",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id: 2,
        username: "Robert Pattinson",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSxm7MNg749jSlHhoGyMHD6NfcjS_6fZRnqg&usqp=CAU",
        status: "pendente",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id: 3,
        username: "Pebas",
        img:"https://placardoesporte.com.br/foto/competicao_logo-29-14.jpg",
        status: "ativo",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id: 4,
        username: "Carlinhos Brown",
        img:"https://s2.glbimg.com/IPMa0Qibs44L4xCuZtKzu0kiGIc=/smart/e.glbimg.com/og/ed/f/original/2021/06/03/carlinhos-brown-1.jpeg",
        status: "ativo",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id: 5,
        username: "Vengeance",
        img:"https://www.looper.com/img/gallery/what-happens-if-you-go-to-the-riddlers-website-from-the-batman/intro-1646159711.webp",
        status: "ativo",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id: 6,
        username: "NetBenas",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Apache_NetBeans_Logo.svg/1776px-Apache_NetBeans_Logo.svg.png",
        status: "ativo",
        email: "1snow@gmail.com",
        age: 35,
    },
]