const randomString = () => Math.random().toString(36).substring(7);
const EditAccountInfoData = {
    firstName: `Juan ${randomString()}`,
    lastName: `Martino ${randomString()}`
  };
  
export default EditAccountInfoData;