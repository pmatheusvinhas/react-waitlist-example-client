# React Waitlist - Vite Direct Example

This example demonstrates using the React Waitlist component with direct integration in a Vite application. It showcases all the features of the library, including:

- Form validation
- reCAPTCHA integration
- Analytics tracking
- Resend audience integration
- Event logging
- API call tracking
- Custom styling with Tailwind theme

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn
- A Resend account with an API key and audience ID
- A reCAPTCHA v3 site key

### Installation

1. Clone the repository:

```bash
git clone https://github.com/pmatheusvinhas/react-waitlist.git
cd react-waitlist/examples/vite-direct
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Configure environment variables:

Copy the `.env.production` file to `.env.local` and fill in your actual values:

```bash
cp .env.production .env.local
```

Then edit `.env.local` with your actual API keys:

```
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
VITE_RESEND_API_KEY=your_resend_api_key_here
VITE_RESEND_AUDIENCE_ID=your_audience_id_here
VITE_WEBHOOK_URL=https://your-webhook-url.com/api/webhook
VITE_WEBHOOK_TOKEN=your_webhook_token_here
```

### Running the Example

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open your browser to [http://localhost:5173](http://localhost:5173) to see the example in action.

## Features Demonstrated

### 1. Form Configuration

The example shows how to configure the form with:

- Custom fields (text, email, select, checkbox)
- Custom validation
- Custom styling using the Tailwind theme

### 2. Security Features

- Honeypot fields for bot detection
- Submission time checking
- reCAPTCHA v3 integration

### 3. Analytics Integration

- Event tracking
- Google Analytics integration
- Custom event logging

### 4. Resend Integration

- Direct API key usage (for demonstration purposes)
- Custom field mapping
- Metadata handling

### 5. Event Logging

The example includes a real-time event log that shows:

- Form events (field focus, submit, success, error)
- API calls
- Timestamps and data for each event

## Project Structure

- `src/App.tsx` - Main component with the WaitlistForm integration
- `src/App.css` - Styles for the example
- `index.html` - HTML template with Google Analytics integration
- `.env` - Environment variables (not committed to git)
- `.env.production` - Template for environment variables

## Learn More

For more information about React Waitlist, check out the [documentation](https://github.com/pmatheusvinhas/react-waitlist).

## License

MIT
