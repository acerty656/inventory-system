export function Form() {
    function submit(e) {
        e.preventDefault();
    }
    return( 
        <>
            <form onSubmit={submit}>
                <label htmlFor="">
                    username
                    <br/>
                    <input type="text" name="" id="" />
                    <button type="submit">Submit</button>
                </label>
            </form>
        </>
    )
}