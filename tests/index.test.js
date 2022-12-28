import DropZone from "../components/DropZone";
import PreviewImage from "../components/PreviewImage";
import Home from "../pages/index";
import "@testing-library/jest-dom";
import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";

describe("DropZone", () => {
  URL.createObjectURL = jest.fn();
  const func = jest.fn();

  it("show drop message", () => {
    render(<DropZone setFile={func} />);
    expect(screen.getByText(/drop your image here/i)).toBeInTheDocument();
  });

  it("does not show generate button if dropped file is not image ", async () => {
    render(<Home />);
    let dropZoneContainer = screen.getByTestId("drop-container");
    const file = createFile("logo.json", 500, "image/json");
    fireEvent.drop(dropZoneContainer, {
      dataTransfer: {
        files: [file],
      },
    });
    expect(screen.queryByText("Generate")).not.toBeTruthy();
  });

  it("renders image as preview", () => {
    render(
      <PreviewImage
        file={
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clipartmax.com%2Fmiddle%2Fm2i8m2b1i8Z5b1b1_picture-300-x-300-pixel%2F&psig=AOvVaw03YyrhyO3xv9T2acx1dfi3&ust=1672136938110000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKCv4dOJl_wCFQAAAAAdAAAAABAE"
        }
      />
    );
    let previewImage = screen.getByAltText("Watermarked image");
    expect(previewImage).toBeInTheDocument();
  });

  it("show watermark on image", () => {
    render(
      <PreviewImage
        file={
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clipartmax.com%2Fmiddle%2Fm2i8m2b1i8Z5b1b1_picture-300-x-300-pixel%2F&psig=AOvVaw03YyrhyO3xv9T2acx1dfi3&ust=1672136938110000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKCv4dOJl_wCFQAAAAAdAAAAABAE"
        }
      />
    );
    let watermarkSpan = screen.getByText("This is watermarked text");
    expect(watermarkSpan).toBeInTheDocument();
  });

  const createFile = (name, size, type) => {
    const file = new File([], name, { type });
    Object.defineProperty(file, "size", {
      get() {
        return size;
      },
    });
    return file;
  };

});
