import "../../style/Relatorio/Relatorio.css";

function Relatorio() {
    return (
        <div className="looker-container">
            <iframe
                src="https://lookerstudio.google.com/embed/reporting/eb34d02c-012d-4a85-8161-06e01b91890b/page/p_ipv5f677kd"
                style={{ border: "none" }}
                allowFullScreen
                sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                title="Looker Studio Report"
            ></iframe>
        </div>
    );
}

export default Relatorio;