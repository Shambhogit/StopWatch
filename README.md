# Online Study Motivation Stopwatch

This is a React-based stopwatch application designed to help users track their study time while staying motivated with random inspirational quotes.

## Features

- **Stopwatch Functionality**: Tracks hours, minutes, and seconds.
- **Motivational Quotes**: Fetches a new inspirational quote every minute.
- **User Controls**:
  - **Resume**: Starts or resumes the stopwatch.
  - **Pause**: Pauses the stopwatch.
  - **Reset**: Resets the stopwatch to zero.

## Technologies Used

- **React**: For building the user interface.
- **Axios**: For fetching random quotes from an external API.
- **Tailwind CSS**: For styling the application.

## How to Use

1. Clone the repository and navigate to the project directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the application in your browser at `http://localhost:5173`.
5. Use the buttons to control the stopwatch:
   - **Resume**: Start or continue the timer.
   - **Pause**: Pause the timer.
   - **Reset**: Reset the timer to zero.
6. A new motivational quote will appear every minute.

## API Used

The application fetches random quotes from the [qapi.vercel.app](https://qapi.vercel.app) API.

## Project Structure

- **src/App.jsx**: Main component containing the stopwatch logic and UI.
- **README.md**: Documentation for the project.

## Future Enhancements

- Add user customization for quote categories.
- Save stopwatch progress locally using browser storage.
- Add sound notifications for specific time intervals.

