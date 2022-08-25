export default function ShowError(err) {
    return alert(err?.response?.data?.message ?? err?.message)
}
