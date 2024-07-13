import Image from "next/image";

export default function Rankings() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h3 className="sub-page-title">CT aura Elo Rating</h3>
        <table>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>PFP</th>
                    <th>aura Elo Rating</th>
                </tr>
            </thead>
            <tbody id="eloTableBody">
            </tbody>
        </table>

        <div className="back-footer">
            <button><a href="/">Back</a></button>
        </div>
    </main>
  );
}
