
async function GetKey (client,DBname,Collection,userName)
{
    const db = client.db(DBname);
    const collection = await db.collection(Collection).aggregate().toArray();
    var Id;
    collection.find((e) => {
        if (e.userName === userName) {
            Id = e._id;
        }
    });
    return Id;
}

async function GetData (client,DBname,Collection,id){
    const db = client.db(DBname);
    const collection = await db.collection(Collection).aggregate().toArray();
    var Data;
    collection.find((e) => {
        if (e._id.toString() === id) {
            Data = e.post;
        }
    });
    if(Data == null)
    {
        return false;
    }
    else
    {
        return Data;
    }
}

async function GetName (client,DBname,Collection,id){
    const db = client.db(DBname);
    const collection = await db.collection(Collection).aggregate().toArray();
    var Data;
    collection.find((e) => {
        if (e._id.toString() === id) {
            Data = e.name;
        }
    });
    if(Data == null)
    {
        return false;
    }
    else
    {
        return Data;
    }
}    
module.exports = {GetKey,GetData,GetName}