import { Card, CardDivider, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { TextInput } from "@/components/ui/input";
import { Tag } from "@/components/ui/tag";
import styles from "./page.module.css";

const REQUIRED_COLUMNS = [
  "date",
  "vendor_id",
  "vendor_name",
  "amount",
  "currency",
  "payment_method",
  "bank_name",
  "gst_number",
  "pan_number",
  "payment_purpose",
  "receiving_bank",
  "receiving_account",
  "country",
];

const BANK_CONFIGS = [
  { id: "hdfc", label: "HDFC Bank", placeholder: "Enter HDFC API Key" },
  { id: "icici", label: "ICICI Bank", placeholder: "Enter ICICI API Key" },
  { id: "axis", label: "Axis Bank", placeholder: "Enter Axis API Key" },
  { id: "kotak", label: "Kotak Bank", placeholder: "Enter Kotak API Key" },
];

export default function IngestPage() {
  return (
    <div className={styles.page}>
      <header className={styles.pageHeader}>
        <div className={styles.titleRow}>
          <h1 className={styles.title}>Data Ingestion Hub</h1>
          <span className={styles.helpIcon} aria-hidden="true" title="Need help with ingestion?">
            ?
          </span>
        </div>
        <p className={styles.subtitle}>
          Upload a CSV file or connect your live bank APIs to kick off the Arealis Magnus pipeline.
          Manage schema validation, data quality checks, and live sync from a single window.
        </p>
      </header>

      <div className={styles.columns}>
        <Card className={styles.uploadCardContent}>
          <CardHeader
            title="📤 CSV File Upload"
            subtitle="Upload a CSV file with your transaction data. We’ll validate the schema and prepare all 8 feature engines."
          />

          <section className={styles.description}>
            <p>
              Supported Format:
            </p>
            <ul className={styles.supportedList}>
              <li>
                <span className={styles.bullet} />
                <span>File Type: CSV (.csv)</span>
              </li>
              <li>
                <span className={styles.bullet} />
                <span>Max Size: 50 MB</span>
              </li>
              <li>
                <span className={styles.bullet} />
                <span>Encoding: UTF-8</span>
              </li>
            </ul>
          </section>

          <CardDivider />

          <section>
            <p className={styles.description}>Required Columns:</p>
            <ul className={styles.requiredList}>
              {REQUIRED_COLUMNS.map((column) => (
                <li key={column}>
                  <span className={styles.bullet} />
                  <span>{column}</span>
                </li>
              ))}
            </ul>
          </section>

          <CardDivider />

          <div className={styles.uploadArea} role="button" tabIndex={0} aria-label="Upload CSV file">
            <span className={styles.uploadIcon}>📁</span>
            <div>
              <strong>Drag file here or</strong>
              <div className={styles.inlineLinks}>
                <button type="button" className={styles.linkButton}>
                  Browse Files
                </button>
              </div>
            </div>
            <p className={styles.uploadHint}>
              We’ll animate the upload once you drop a file. Your data never leaves the secure session.
            </p>
          </div>

          <div className={styles.inlineLinks}>
            <button type="button" className={styles.linkButton}>
              Download Sample CSV Template
            </button>
            <button type="button" className={styles.linkButton}>
              View Format Guide
            </button>
          </div>
        </Card>

        <Card>
          <CardHeader
            title="🔌 Live Bank API Setup"
            subtitle="Connect HDFC, ICICI, Axis, or Kotak APIs for real-time transaction monitoring. OAuth or API key workflows are supported."
          />
          <section>
            <p className={styles.description}>Setup Steps:</p>
            <ol className={styles.setupSteps}>
              {[
                "Enter bank API credentials",
                "Test connection",
                "Authorize & sync",
                "Jump to dashboard",
              ].map((step, idx) => (
                <li key={step}>
                  <span className={styles.bullet} />
                  <span>
                    Step {idx + 1}: {step}
                  </span>
                </li>
              ))}
            </ol>
          </section>

          <div className={styles.counterRow}>
            <Tag tone="info">Connected: 0/4 banks</Tag>
            <Tag tone="warning">Status: Not configured</Tag>
          </div>

          <CardDivider />

          <div className={styles.credentials}>
            {BANK_CONFIGS.map((bank) => (
              <div key={bank.id}>
                <Checkbox label={bank.label} name={`bank-${bank.id}`} />
                <TextInput
                  name={`${bank.id}-key`}
                  placeholder={bank.placeholder}
                  aria-label={bank.placeholder}
                />
              </div>
            ))}
          </div>

          <Button variant="secondary" className={styles.oauthButton}>
            Login with Bank OAuth
          </Button>

          <div className={styles.ctaRow}>
            <Button variant="ghost">Test Connection</Button>
            <Button variant="success">Setup</Button>
          </div>
        </Card>
      </div>

      <section className={styles.dividerBlock}>
        <hr className="divider" />
        <div className={styles.ctaRow}>
          <Button variant="ghost">Cancel</Button>
          <Button>Upload CSV</Button>
          <Button variant="success">Setup Live API</Button>
        </div>
      </section>

      <section className={styles.feedbackGrid} aria-label="Upload feedback">
        <Card dense>
          <CardHeader title="Processing Status" subtitle="Live status updated every second" />
          <div className={styles.statusList}>
            <div className={styles.statusItem}>
              <span className={styles.statusLabel}>
                <span className={styles.statusDot} />
                Schema validation
              </span>
              <Tag tone="success">Passed</Tag>
            </div>
            <div className={styles.statusItem}>
              <span className={styles.statusLabel}>
                <span className={styles.statusDot} />
                Column integrity
              </span>
              <Tag tone="info">In Progress</Tag>
            </div>
            <div className={styles.statusItem}>
              <span className={styles.statusLabel}>
                <span className={styles.statusDot} />
                Row count check
              </span>
              <Tag tone="warning">Queued</Tag>
            </div>
          </div>
          <div className={styles.progressBar} role="progressbar" aria-valuenow={58} aria-valuemin={0} aria-valuemax={100}>
            <span className={styles.progressFill} />
          </div>
        </Card>

        <Card dense>
          <CardHeader title="Issues & Guidance" subtitle="We surface actionable guidance to resolve blockers quickly." />
          <ul className={styles.issuesList}>
            <li>
              <Tag tone="error">Invalid file format</Tag>
              <p className={styles.description}>
                Ensure your file extension is .csv. XLSX and Google Sheets exports must be converted before upload.
              </p>
            </li>
            <li>
              <Tag tone="warning">File too large</Tag>
              <p className={styles.description}>
                Current limit is 50 MB. Consider chunking the file into multiple CSVs or switching to live API ingestion.
              </p>
            </li>
            <li>
              <Tag tone="info">Missing columns</Tag>
              <p className={styles.description}>
                Validate that all 13 required columns are present. We highlight missing headers in the validation report.
              </p>
            </li>
            <li>
              <Tag tone="error">Network retry</Tag>
              <p className={styles.description}>
                Lost connection detected. Retry upload or contact support if issue persists.
              </p>
            </li>
          </ul>
        </Card>

        <Card dense>
          <CardHeader title="Session Insights" subtitle="After completion you’ll be redirected with your session ID." />
          <div className={styles.statusList}>
            <div className={styles.statusItem}>
              <span className={styles.statusLabel}>
                <span className={styles.statusDot} />
                Session token
              </span>
              <Tag>sess_abc123xyz</Tag>
            </div>
            <div className={styles.statusItem}>
              <span className={styles.statusLabel}>
                <span className={styles.statusDot} />
                Redirect URL
              </span>
              <Tag tone="info">/dashboard?session=...</Tag>
            </div>
            <div className={styles.statusItem}>
              <span className={styles.statusLabel}>
                <span className={styles.statusDot} />
                Auto-refresh
              </span>
              <Tag tone="success">Enabled</Tag>
            </div>
          </div>
          <div className={styles.alert}>
            CSV processing typically completes in under 45 seconds. Live API sync runs every 5 minutes once authorised.
          </div>
        </Card>
      </section>
    </div>
  );
}


