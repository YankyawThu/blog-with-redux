function Alert({info}) {
    return (
        <span className="absolute top-5 left-32 right-32 alert text-center">
            <span className="alert-box rounded-lg px-3 py-2 shadow">
                {info.msg}
            </span>
        </span>
    )
}

export default Alert