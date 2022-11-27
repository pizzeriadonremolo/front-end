export const helpHttp = () => {
    const serverApi = process.env.REACT_APP_BACKEND_URL;
    
    const customFetch = async (endpoint, options) => {

        const defaultHeader = {
            accept: "application/json",
            
        };

        const controller = new AbortController();
        options.signal = controller.signal;
        options.method = options.method || "GET";
        options.headers = options.headers? {  ...defaultHeader, ...options.headers} : defaultHeader;

        options.body = JSON.stringify(options.body)||false;
        if(!options.body) delete options.body;

        let response = {};

        setTimeout(() => controller.abort(), 60000)
        return fetch(serverApi+endpoint, options)
        .then((res) => {
            response = { ok:res.ok, status : res.status||"00",
            statusText : res.statusText||"Error" };
            return res.json()
        }).then((res) => 
            response.ok?
            res
            :Promise.reject({
                err : true,
                status : response.status||"00",
                statusText : response.statusText||"Error",
                errors: res.errors
            })
        ).catch((err) => err)
    };

    const get = (url, options = {}) => customFetch(url,options);

    
    const post = (url, options = {}) => {
        options.method = "POST"
        return customFetch(url,options);
    };

    
    const put = (url, options = {}) => {
        options.method = "PUT"
        return customFetch(url,options);
    };

    
    const del = (url, options = {}) => {
        options.method = "DELETE"
        return customFetch(url,options);
    };

    return {
        get,post,put,del
    };
}