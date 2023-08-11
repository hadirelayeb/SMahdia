import HttpService from "./ConfAxios";
class productService {
   
    createproduct = async (payload) => {
        const product = 'createproduct';
        return await HttpService.post(product, payload)
    };
  
   
        allProducts = async (payload) => {
            const product = 'products';
            return await HttpService.get(product, payload)
        };

        alluser = async (payload) => {
            const product ='users';
            return await HttpService.get(product, payload)
        };
      
    delete = async (id) => {
        const endpoint = `user/${id}`;
        return await HttpService.delete(endpoint);
    };
    patch = async (id) => {
        const endpoint = `user/${id}`;
        return await HttpService.patch(endpoint);
    };
        
    }



export default new productService();