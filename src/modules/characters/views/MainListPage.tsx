import { MainLayout } from "../../../layouts"
import './MainListPage.css';

export const MainListPage = () => {
  return (
    <MainLayout>
        <section className="list-container p-4">
            <h1 className="text-center text-4xl">Lista de personajes</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-3 justify-items-center">
            </div>
        </section>
    </MainLayout>
  )
}
