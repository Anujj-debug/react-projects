function Hello() {

    let number = 420;
    let myName = 'Anuj';
    let fullName = () => {
        return 'Anuj kumar Pal';
    }
    return <h3>
        Message No. {number} : I am your master {myName} or {fullName()}
    </h3>
}
export default Hello;