import {pool} from "./index.js";

export const findAll = async () =>{
    const QUERY = "SELECT * FROM users";
    try{
      const client = await pool.getConnection();
      const result = await client.query(QUERY);
      console.log(result[0]);
      return result[0];
    } catch (error) {
      console.log("Error occured on find all data");
      throw error;
    }
}

export const getAllOffersQuery = async () =>{
  const QUERY = "SELECT * FROM Offers";
  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY);
    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.log("Error occured on find all data");
    throw error;
  }
}

export const getAllSectionsQuery = async () =>{
  const QUERY = "SELECT * FROM section";
  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY);
    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.log("Error occured on find all data");
    throw error;
  }
}

export const getAllSectionProductsQuery = async () =>{
  const QUERY = "SELECT * FROM sectionproducts";
  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY);
    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.log("Error occured on find all data");
    throw error;
  }
}

export const getDeliveryAppTokenQuery = async () =>{
  const QUERY = "SELECT * FROM token";
  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY);
    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.log("Error occured on getDeliveryAppTokenQuery");
    throw error;
  }
}


export const getAllDeliveryListQuery = async () =>{
  const QUERY = "SELECT * FROM delivery ORDER BY id DESC";
  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY);
    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.log("Error occured on find all data");
    throw error;
  }
}

export const subGroupList = async () =>{
  // const QUERY = "SELECT DISTINCT SubGroup FROM MainGroup";
  const QUERY = "SELECT DISTINCT SubGroup FROM finalproducts";
  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY);
    console.log(result);
    return result[0];
  } catch (error) {
    console.log("Error occured on subGroupListAll data");
    throw error;
  }
}

export const getAllJobPostQuery = async () =>{
  const QUERY = "SELECT * FROM mvjobpost";
  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY);
    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.log("Error occured on getAllJobPostQuery");
    throw error;
  }
}

export const getEventRegCountMVQuery = async () =>{
  const QUERY = 'SELECT COUNT(*) AS count FROM mveventregister';
  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY);
    // console.log(result[0]);
    return result[0].count;
  } catch (error) {
    console.log("Error occured on getEventRegCountMVQuery");
    throw error;
  }
}

export const findUserById = async (id) =>{
    const QUERY = "SELECT * FROM users WHERE id = ?";
    try{
      const client = await pool.getConnection();
      const result = await client.query(QUERY, [id]);
      console.log(result[0]);
      return result[0];
    } catch (error) {
      console.log("Error occured on find by id");
      throw error;
    }
}

export const getSectionProductsByIdQuery = async (id) =>{
  const QUERY = "SELECT * FROM sectionproducts WHERE subsection = ?";
  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [id]);
    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.log("Error occured on find sectionproducts by id");
    throw error;
  }
}
export const getDeliveryByIdQuery = async (id) =>{
  const QUERY = "SELECT * FROM delivery WHERE phone = ? ORDER BY id DESC";
  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [id]);
    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.log("Error occured on find sectionproducts by id");
    throw error;
  }
}

export const deleteOfferByIdQuery = async (id) =>{
  const QUERY = "DELETE FROM Offers WHERE id = ?";
  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [id]);
    console.log(result);
    return result;
  } catch (error) {
    console.log("Error occured on deleteOfferByIdQuery");
    throw error;
  }
}

export const deleteSectionByIdQuery = async (id) =>{
  const QUERY = "DELETE FROM section WHERE id = ?";
  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [id]);
    console.log(result);
    return result;
  } catch (error) {
    console.log("Error occured on deleteSectionByIdQuery");
    throw error;
  }
}

export const deleteSectionProductByIdQuery = async (id) =>{
  const QUERY = "DELETE FROM sectionproducts WHERE id = ?";
  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [id]);
    console.log(result);
    return result;
  } catch (error) {
    console.log("Error occured on deleteSectionByIdQuery");
    throw error;
  }
}

export const loginUserQuery = async (email, password ) =>{
  const QUERY = `SELECT * FROM users WHERE email = ? AND password = ?`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [email, password]);
    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.log("Error occured on login user");
    throw error;
  }
}

export const loginMemberQuery = async (email, password ) =>{
  const QUERY = `SELECT * FROM mvmembers WHERE email = ? AND password = ?`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [email, password]);
    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.log("Error occured on login user");
    throw error;
  }
}

export const loginCustomerQuery = async (phone, password ) =>{
  const QUERY = `SELECT * FROM customer WHERE phone = ? AND password = ?`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [phone, password ]);
    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.log("Error occured on login customer");
    throw error;
  }
}



export const getProfileByIdQuery = async (email) =>{
  const QUERY = `SELECT * FROM mvprofile WHERE email = ?`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [email]);
    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.log("Error occured on login user");
    throw error;
  }
}

export const getProfileByEmailQuery = async (email) =>{
  const QUERY = `SELECT * FROM mvbanners WHERE email = ?`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [email]);
    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.log("Error occured on mv banners user");
    throw error;
  }
}
export const getJobPostByEmailQuery = async (email) =>{
  const QUERY = `SELECT * FROM mvjobpost WHERE email = ?`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [email]);
    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.log("Error occured on mv banners user");
    throw error;
  }
}

export const getCvByEmailQuery = async (email) =>{
  const QUERY = `SELECT * FROM mvcvs WHERE email = ?`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [email]);
    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.log("Error occured on mv getCvByEmailQuery user");
    throw error;
  }
}

export const getProfileByWorkQuery = async (work) =>{

  const keywords = work.split(' ').filter(keyword => keyword.trim() !== '');
  
  // Build the SQL WHERE clause dynamically
  const whereClauses = keywords.map(keyword => `work LIKE ?`).join(' OR ');
  const queryParams = keywords.map(keyword => `%${keyword}%`);
  
  const QUERY = `SELECT * FROM mvprofile WHERE ${whereClauses}`;
  // const QUERY = `SELECT * FROM mvprofile WHERE work LIKE ?`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, queryParams);
    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.log("Error occured on login user");
    throw error;
  }
}

export const getOffersByLimitQuery = async (limit, offset ) =>{
  const QUERY = `SELECT * FROM Offers ORDER BY id LIMIT ? OFFSET ?`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [limit, offset]);
    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.log("Error occured on login user");
    throw error;
  }
}

export const getAllSubGroupListQuery = async (subGroupName) =>{
  // const QUERY = `SELECT * FROM MainGroup WHERE SubGroup = ?`;
  const QUERY = `SELECT * FROM finalproducts WHERE SubGroup = ?`;
  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [subGroupName]);
    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.log("Error occured on getAllSubGroupListQuery");
    throw error;
  }
}

export const updateProductQuery = async (img, barcode ) =>{
  const QUERY = `UPDATE MainGroup SET img = ? WHERE Barcode = ?`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [img, barcode]);
    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.log("Error occured on updateProductQuery");
    throw error;
  }
}

export const updateProductImage = async (img, barcode ) =>{
  const QUERY = `UPDATE MainGroup SET image = ? WHERE Barcode = ?`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [img, barcode]);
    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.log("Error occured on updateProductImage");
    throw error;
  }
}

export const updateDeliveryStatusQuery = async (orderstatus, serialno, id ) =>{
  const QUERY = `UPDATE delivery SET orderstatus = ? , serialno = ? WHERE id = ?`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [orderstatus, serialno, id ]);
    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.log("Error occured on updateDeliveryStatusQuery");
    throw error;
  }
}

export const updateAccountStatusQuery = async (accountstatus, phone ) =>{
  const QUERY = `UPDATE customer SET accountstatus = ? WHERE phone = ?`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [accountstatus, phone]);
    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.log("Error occured on updateAccountStatusQuery");
    throw error;
  }
}

export const updateDeliveryAppTokenQuery = async (token, id) =>{
  const QUERY = `UPDATE token SET token = ? WHERE id = ?`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [token, id ]);
    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.log("Error occured on updateDeliveryStatusQuery");
    throw error;
  }
}

export const updateOffersProduct = async (id, Name, Price, Image) =>{
  const QUERY = `UPDATE Offers SET Name = ?, Price = ?, Image = ? WHERE id = ?`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [Name, Price, Image, id]);
    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.log("Error occured on updateOffersProduct");
    throw error;
  }
}

export const updateSectionsQuery = async (id, mainsection, subsection, image) =>{
  const QUERY = `UPDATE section SET mainsection = ?, subsection = ?, image = ? WHERE id = ?`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [mainsection, subsection, image, id]);
    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.log("Error occured on updateSectionsQuery");
    throw error;
  }
}

export const updateSectionProductsQuery = async (id, subsection, name, price, image) =>{
  const QUERY = `UPDATE sectionproducts SET subsection = ?, name = ?, price = ?, image = ? WHERE id = ?`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [subsection, name, price, image, id]);
    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.log("Error occured on updateSectionProductsQuery");
    throw error;
  }
}

export const addUser = async (username, email, password ) =>{
    const QUERY = `INSERT INTO users(username, email, password) VALUES(?,?,?)`;

    try{
      const client = await pool.getConnection();
      const result = await client.query(QUERY, [username, email, password]);
      console.log(result);
      return result;
    } catch (error) {
      console.log("Error occured on add user");
      throw error;
    }
}

export const registerCustomerQuery = async (username, phone, password, address, apptoken) =>{
  const QUERY = `INSERT INTO customer(username, phone, password, address, apptoken) VALUES(?,?,?,?,?)`;
  const checkQuery = 'SELECT COUNT(*) AS count FROM customer WHERE phone = ?';
  try{
    const client = await pool.getConnection();
    const checkPhone = await client.query(checkQuery, [ phone]);
    const haveData = checkPhone[0];
    const havData = haveData[0];
    console.log("data",havData.count);
    console.log(checkPhone);
    if (havData > 0) {
      return 'Phone number already exists';
    }else{
      const result = await client.query(QUERY, [username, phone, password, address, apptoken]);
      console.log(result);
      return result;
    }
   
  } catch (error) {
    console.log("Error occured on registerCustomerQuery");
    throw error;
  }
}

export const addDeliveryListQuery = async (name, phone, address, orderlist, orderstatus) =>{
  const QUERY = `INSERT INTO delivery(name, phone, address, orderlist, orderstatus ) VALUES(?,?,?,?,?)`;
  console.log(orderstatus);
  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [name, phone, address, orderlist, orderstatus]);
    console.log(result);
    return result;
  } catch (error) {
    console.log("Error occured on createDeliveryList");
    throw error;
  }
}


export const addBanners = async (email, image) =>{
  const QUERY = `INSERT INTO mvbanners(email, image) VALUES(?,?)`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [email, image]);
    console.log(result);
    return result;
  } catch (error) {
    console.log("Error occured on add user");
    throw error;
  }
}

export const addJobPostQuery = async (email, title, description) =>{
  const QUERY = `INSERT INTO mvjobpost(email, title, description) VALUES(?,?,?)`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [email, title, description]);
    console.log(result);
    return result;
  } catch (error) {
    console.log("Error occured on addJobPostQuery");
    throw error;
  }
}

export const addCvQuery = async (email, name, cv ) =>{
  const QUERY = `INSERT INTO mvcvs(email, name, cv ) VALUES(?,?,?)`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [email, name, cv ]);
    console.log(result);
    return result;
  } catch (error) {
    console.log("Error occured on addCvQuery");
    throw error;
  }
}

export const addMemberQuery = async (email, company, tradeid, activity) =>{
  const QUERY = `INSERT INTO mvmembers(email, company, tradeid, activity) VALUES(?,?,?,?)`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [email, company, tradeid, activity]);
    console.log(result);
    return result;
  } catch (error) {
    console.log("Error occured on addCvQuery");
    throw error;
  }
}

export const createEventRegisterQuery = async (name, email, company, phone, rollup, food, event) =>{
  const QUERY = `INSERT INTO mveventregister( name,email, company, phone, rollup, food, event) VALUES(?,?,?,?,?,?,?)`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [name, email, company, phone, rollup, food, event]);
    console.log(result);
    return result;
  } catch (error) {
    console.log("Error occured on createEventRegisterQuery");
    throw error;
  }
}

export const createProfileMVQuery = async (firstname, lastname, email, image, company, work, url, address ) =>{
  const QUERY = `INSERT INTO mvprofile(firstname, lastname, email, image, company, work, url, address) VALUES(?,?,?,?,?,?,?,?)`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [firstname, lastname, email, image, company, work, url, address]);
    console.log("email");
    return email;
  } catch (error) {
    console.log("Error occured on add mvprofile");
    throw error;
  }
}
export const addProduct = async (branchName, productName, unit, mainGroup, subGroup, barcode, unitCost, profitMargin,profitMarkup, price1, imgUrl ) =>{
  const QUERY = `INSERT INTO Product(branchName, productName, unit, mainGroup, subGroup, barcode, unitCost, profitMargin,profitMarkup, price1, imgUrl) VALUES(?,?,?,?,?,?,?,?,?,?,?)`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [branchName, productName, unit, mainGroup, subGroup, barcode, unitCost, profitMargin,profitMarkup, price1, imgUrl]);
    console.log(result);
    return result;
  } catch (error) {
    console.log("Error occured on add product");
    throw error;
  }
}

export const addOfferProduct = async (Name, Price, Image) =>{
  const QUERY = `INSERT INTO Offers(Name, Price, Image) VALUES(?,?,?)`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [Name, Price, Image]);
    console.log(result);
    return result;
  } catch (error) {
    console.log("Error occured on add product");
    throw error;
  }
}


export const addNewSectionsQuery = async (mainsection, subsection, image) =>{
  const QUERY = `INSERT INTO section(mainsection, subsection, image) VALUES(?,?,?)`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [mainsection, subsection, image]);
    console.log(result);
    return result;
  } catch (error) {
    console.log("Error occured on add new section");
    throw error;
  }
}

export const addSectionProductsQuery = async (subsection, name, price, image) =>{
  const QUERY = `INSERT INTO sectionproducts(subsection, name, price, image) VALUES(?,?,?,?)`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [subsection, name, price, image]);
    console.log(result);
    return result;
  } catch (error) {
    console.log("Error occured on add section products");
    throw error;
  }
}

export const addItemPurchase = async (items) =>{
  const QUERY = `INSERT INTO pc(items) VALUES(?)`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [items]);
    console.log(result);
    return result;
  } catch (error) {
    console.log("Error occured on add purchase items");
    throw error;
  }
}
