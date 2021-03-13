import axios from 'axios'

class API{
    constructor({url}){
        this.url = url
        this.endpoints = {}
    }
    /**
     * Create and store a single entity's endpoints
     * @param {A entity object} entity 
     */
    createEntity(entity){
        this.endpoints[entity.name] = this.createBasicCRUDEndpoints(entity)
    }

    /**
     * Create basic endpoints handler for CRUD operations 
     * @param {A entity object} entity
     */
    createBasicCRUDEndpoints({name}){
        var endpoints = {}
        const resourceURL = `${this.url}/${name}`
        endpoints.getAll = ({query} = {}) => axios.get(resourceURL, {params: {query}})
        endpoints.getOne = ({id}) => axios.get(`${resourceURL}/${id}`)
        endpoints.create = (toCreate) => axios.post(resourceURL, toCreate)
        endpoints.update = (toUpdate) => axios.put(resourceURL, toUpdate)
        endpoints.delete = ({id}) => axios.delete(`${resourceURL}/${id}`)

        return endpoints;
    }
}

export default API;