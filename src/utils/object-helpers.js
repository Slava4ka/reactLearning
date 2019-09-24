export const updateObjectInArray = (entity, entityId, propName, newProp) => {
    return entity.map(u => {
        if (u[propName] === entityId) {
            return {...u, ...newProp}
        }
        return u
    })
};