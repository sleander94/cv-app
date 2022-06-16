import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import '../styles/PDFConverter.css';

const PDFConverter = ({ target }) => {
  const getPDF = () => {
    const element = document.querySelector(`.${target}`);
    // Remove border styles & save values to reapply
    const borderVal = element.style.border;
    const shadowVal = element.style.boxShadow;
    element.style.border = 'none';
    element.style.boxShadow = 'none';
    html2canvas(element, { scale: 2 }).then((canvas) => {
      const data = canvas.toDataURL('image/png');
      // Set image and pdf sizes to A4 paper
      const pdf = new jsPDF('p', 'mm', [297, 210]);
      pdf.addImage(data, 'PNG', 0, 0, 210, 297);

      // Get user's name from DOM and save file accordingly
      pdf.save(
        `${
          document.getElementById('CV').firstChild.firstChild.innerHTML
        } CV.pdf`
      );
      element.style.border = borderVal;
      element.style.boxShadow = shadowVal;
    });
  };

  return (
    <button className="PDFConverter" type="button" onClick={() => getPDF()}>
      Download PDF
    </button>
  );
};

export default PDFConverter;
