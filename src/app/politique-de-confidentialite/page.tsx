import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/data/site";

const CONTROLLER =
  "Le groupe ALICE — Alliance des Libéraux, Indépendants et Centristes de l'Étranger";

const RETENTION =
  "Les messages reçus sont conservés pendant une durée maximale de 12 mois après le dernier échange, sauf nécessité justifiée de suivi ou obligation légale de conservation.";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Responsable du traitement, finalités, conservation et droits des personnes pour les formulaires du site ALICE.",
  robots: { index: false, follow: true },
};

const mailClass =
  "font-semibold text-alice-blue underline-offset-4 hover:underline";

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <PageHero
        eyebrow="Informations"
        title="Politique de confidentialité"
        description="Traitement des informations transmises via les formulaires du site."
      />

      <Container className="py-16 sm:py-20">
        <div className="prose-alice mx-auto max-w-3xl">
          <section>
            <h2>Présentation</h2>
            <p>
              Ce site informe les visiteurs sur les activités du groupe{" "}
              {siteConfig.name} et permet de communiquer avec ses élus à
              l&apos;{siteConfig.afeName}. La présente page décrit les données
              personnelles traitées à cette occasion.
            </p>
            <p>
              Le site ne suit pas les visiteurs. Il n&apos;utilise ni mesure
              d&apos;audience, ni publicité, ni liste de diffusion. Il ne
              constitue pas une base de données de contacts.
            </p>
          </section>

          <section>
            <h2>Responsable du traitement</h2>
            <p>
              <strong>Responsable du traitement :</strong> {CONTROLLER}.
            </p>
            <p>
              Pour toute demande relative à vos données personnelles, écrivez
              à{" "}
              <a href={`mailto:${siteConfig.email}`} className={mailClass}>
                {siteConfig.email}
              </a>
              .
            </p>
            <p>
              Aucune forme juridique distincte et aucune adresse postale du
              groupe ne sont publiées sur ce site : ces éléments restent à
              confirmer. Cette page ne désigne aucune personne physique comme
              responsable du traitement.
            </p>
          </section>

          <section>
            <h2>Données collectées</h2>
            <p>
              Les formulaires de contact collectent le nom, l&apos;adresse
              électronique, l&apos;objet et le message. La circonscription
              n&apos;est demandée que dans le formulaire destiné aux
              conseillers des Français de l&apos;étranger, et seulement
              lorsqu&apos;elle est indiquée volontairement.
            </p>
            <p>
              Le formulaire n&apos;accepte pas de pièce jointe. Le site
              n&apos;enregistre pas ces envois dans une base de données.
            </p>
          </section>

          <section>
            <h2>Finalité</h2>
            <p>
              Ces données sont utilisées exclusivement pour recevoir, traiter
              et répondre aux demandes liées au mandat des élus, conseillers
              des Français de l&apos;étranger.
            </p>
            <p>
              Elles ne sont pas utilisées pour le démarchage politique, le
              profilage, la constitution d&apos;un fichier de sympathisants ou
              l&apos;envoi de communications non sollicitées.
            </p>
          </section>

          <section>
            <h2>Base juridique</h2>
            <p>
              Le message est adressé volontairement afin d&apos;obtenir une
              réponse. Ce traitement n&apos;est pas présenté comme
              l&apos;exécution d&apos;un contrat. Il ne s&apos;appuie pas non
              plus sur une mission d&apos;intérêt public : la qualité
              d&apos;élu des membres du groupe ne suffit pas, à elle seule, à
              retenir cette base. Aucun consentement distinct n&apos;est
              recueilli.
            </p>
            <p>
              La base examinée est l&apos;intérêt légitime du groupe à recevoir
              ces demandes et à y répondre, au sens de l&apos;article 6,
              paragraphe 1, point f, du règlement général sur la protection des
              données. Cette qualification, et la mise en balance qu&apos;elle
              suppose, doivent être confirmées juridiquement. Elle n&apos;est
              pas tenue pour définitive dans la présente page.
            </p>
          </section>

          <section>
            <h2>Durée de conservation</h2>
            <p>{RETENTION}</p>
            <p>
              Le site lui-même ne tient aucune base de données de contacts. Les
              messages sont transmis par courrier électronique. Ils peuvent
              demeurer dans la boîte du destinataire pendant la durée de
              conservation applicable. Les prestataires techniques peuvent
              traiter ou conserver certaines données selon leurs obligations
              contractuelles.
            </p>
            <p>
              Aucun dispositif du site ne supprime automatiquement ces
              courriels.
            </p>
          </section>

          <section>
            <h2>Destinataires</h2>
            <p>
              Les messages ne sont accessibles qu&apos;aux représentants
              habilités du groupe qui traitent les demandes.
            </p>
            <p>
              Interviennent en outre les prestataires techniques suivants :
              Vercel, pour l&apos;hébergement du site ; Resend, pour la
              transmission du courriel ; le service de messagerie du
              destinataire, pour l&apos;acheminement et la conservation du
              message.
            </p>
          </section>

          <section>
            <h2>Transferts hors de l&apos;Espace économique européen</h2>
            <p>
              Certains traitements techniques peuvent avoir lieu en dehors de
              l&apos;Espace économique européen. Vercel Inc., qui héberge le
              site, et Plus Five Five, Inc., qui opère Resend, sont établis aux
              États-Unis. Resend indique publiquement que les données de son
              service de courriel sont conservées aux États-Unis. Cette
              indication décrit le service en général.
            </p>
            <p>
              La présente page ne constate ni décision d&apos;adéquation, ni
              clauses contractuelles types, ni autre garantie effectivement
              applicable au compte utilisé pour ce site. Restent à confirmer
              l&apos;application des accords de traitement de Vercel et de
              Resend, le lieu de traitement retenu pour cet hébergement, la
              durée de conservation de leurs journaux techniques, ainsi que le
              prestataire qui héberge la boîte recevant les messages.
            </p>
          </section>

          <section>
            <h2>Cookies</h2>
            <p>
              Le site n&apos;utilise pas, en l&apos;état, de cookies
              publicitaires, de mesure d&apos;audience ou d&apos;autres cookies
              non essentiels. Aucun bandeau de consentement n&apos;est affiché.
            </p>
          </section>

          <section>
            <h2>Vos droits</h2>
            <p>
              Vous pouvez demander l&apos;accès aux données vous concernant,
              leur rectification, leur effacement et la limitation du
              traitement. Vous pouvez vous opposer au traitement. Vous pouvez
              également demander la portabilité de vos données lorsque ce droit
              s&apos;applique.
            </p>
            <p>
              Pour exercer ces droits, écrivez à{" "}
              <a href={`mailto:${siteConfig.email}`} className={mailClass}>
                {siteConfig.email}
              </a>
              .
            </p>
            <p>
              Vous pouvez introduire une réclamation auprès de la Commission
              nationale de l&apos;informatique et des libertés (CNIL) :{" "}
              <a
                href="https://www.cnil.fr"
                className={mailClass}
                rel="noopener noreferrer"
              >
                www.cnil.fr
              </a>
              .
            </p>
            <p>
              Les informations sur l&apos;éditeur et l&apos;hébergeur figurent
              dans les{" "}
              <Link href="/mentions-legales" className={mailClass}>
                mentions légales
              </Link>
              .
            </p>
          </section>
        </div>
      </Container>
    </>
  );
}
