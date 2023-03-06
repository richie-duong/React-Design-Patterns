// Higher order components are never directly displayed in jsx, which is why HOC conventions doesn't require capitalized names
export const printProps = Component => {
    return (props) => {
        console.log(props)
        return <Component {...props} />
    }
}