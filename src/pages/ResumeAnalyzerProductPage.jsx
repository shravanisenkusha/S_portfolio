import React from 'react';
import ResumeImage from '../assets/Resume.png';

const ResumeAnalyzerProductPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img src={ResumeImage} alt="Resume Analyzer" className="rounded-lg shadow-lg w-full" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">Resume Analyzer</h1>
          <p className="text-lg mb-6">
            AI-powered tool that analyzes and optimizes your resume for better job prospects.
            Get instant feedback on content, formatting, and ATS compatibility.
          </p>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Key Features:</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Instant ATS compatibility scoring</li>
              <li>Content optimization suggestions</li>
              <li>Industry-specific templates</li>
              <li>Keyword optimization for job descriptions</li>
              <li>Formatting and structure recommendations</li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">How It Works:</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Upload your resume (PDF or Word)</li>
              <li>Get instant analysis and score</li>
              <li>Review suggestions and implement changes</li>
              <li>Download your optimized resume</li>
            </ol>
          </div>

          <a
            href="https://resume-analyzer-app-351747392494.asia-south1.run.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-colors text-center"
          >
            Try Resume Analyzer Now (Free)
          </a>

          <div className="mt-6 text-sm text-gray-600">
            <p>Opens in a new window. No account required.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeAnalyzerProductPage;