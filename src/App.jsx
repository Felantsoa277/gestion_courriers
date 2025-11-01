import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { DarkModeProvider } from './pages/DarkModeContext'
import { SidebarProvider } from "./pages/SideBarContext"
import InscriptionFormPage from './pages/InscriptionFormPage'
import Modification from './pages/ModificationInfo'
import Connexion from './pages/Login'
import ProfilPage from './pages/ProfilPage'
import Accueil from './pages/Accueil'
import Informations from './pages/ListeCourriers'
import ModificationEnregistrement from './pages/ModificationEnregistrement'
import Enregistrement from './pages/Enregistrement'
import  ObservationPage from './pages/ObservationPage'
import ModificationObservation from './pages/ModificationObservation'
import Assignation from './pages/Assignation'
import TestPage from './pages/test'
import DashboardPage from './pages/Dashboard'
import DossiersAffectes from './pages/DossiersAffectés'
import DossiersSuivis from './pages/DossiersSuivis'
import DossiersSansAffectataires from './pages/DossiersSansAffectataires'
import DossiersClasses from './pages/DossiersClassés'
import DossiersDivisions from './pages/DossiersDivisions'
import ListeDossiersDivisions from './pages/ListeDossiersDivisions'
import DepartCourrier from './pages/DepartCourrier'
import EnregistrementDepart from './pages/EnregistrementDepart'
// import ListeDossiersAffectes from "./pages/pagesecretaire/ListeDossiersAffectes"
import ModificationDepart from './pages/ModificationDepart'
function App() {
  return (
    <DarkModeProvider>
      <SidebarProvider>
        <Router>
          <Routes>
            <Route path="/inscription-form" element={<InscriptionFormPage />} />
            <Route path="/modification-form" element={<Modification />} />
            <Route path="/" element={<Connexion />} />
            <Route path="/profil" element={<ProfilPage />} />
            <Route path="/accueil" element={<Accueil />} />
            <Route path="/information" element={<Informations />} />
            <Route path="/informationdepart" element={<DepartCourrier />} />
            <Route path="/enregistrementdepart" element={<EnregistrementDepart />} />
            <Route path="/modificationdepart" element={<ModificationDepart />} />
            <Route path="/modification/:id" element={<ModificationEnregistrement />} />
            <Route path="/enregistrement" element={<Enregistrement />} />
            <Route path="/observation-form" element={<ObservationPage />} />
            <Route path="/modif-observation" element={<ModificationObservation />} />
            <Route path="/assignation" element={<Assignation />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/dossiers-affectes" element={<DossiersAffectes />} />
            <Route path="/dossiers-suivis" element={<DossiersSuivis />} />
            <Route path="/dossiers-sans-affectataires" element={<DossiersSansAffectataires />} />
            <Route path="/dossiers-classes" element={<DossiersClasses />} />
            <Route path="/dossiers-divisions" element={<DossiersDivisions />} />
            <Route path="/liste-dossiers-divisions" element={<ListeDossiersDivisions />} />
            {/* <Route path="/liste-dossiers-affectes" element={<ListeDossiersAffectes />} /> */}

          </Routes>
        </Router>
      </SidebarProvider>
    </DarkModeProvider>
  )
}

export default App
