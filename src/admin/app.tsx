import {
  // Text alignment
  Alignment,
  AutoLink,
  // Block quote
  BlockQuote,
  // Text formatting
  Bold,
  Code,
  // Basic essentials
  Essentials,
  // Font
  FontBackgroundColor,
  FontColor,
  // Headings
  Heading,
  // Horizontal rule
  HorizontalLine,
  // Images
  Image,
  ImageCaption,
  ImageInsert,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Italic,
  // Links
  Link,
  LinkImage,
  // Lists
  List,
  Paragraph,
  // Clipboard
  PasteFromOffice,
  // Remove format
  RemoveFormat,
  Strikethrough,
  // Tables
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
  // Auto formatting
  TextTransformation,
  Underline,
} from "ckeditor5";

import {
  StrapiMediaLib,
  StrapiUploadAdapter,
  setPluginConfig,
  type PluginConfig,
  type Preset,
} from "@_sh/strapi-plugin-ckeditor";

const newsPreset: Preset = {
  name: "newsPreset",
  description: "Optimized CKEditor preset for news article publishing",
  editorConfig: {
    licenseKey: "GPL",
    plugins: [
      // Essential plugins
      Essentials,
      Paragraph,

      // Text formatting - cần thiết cho tin tức
      Bold,
      Italic,
      Underline,
      Strikethrough,
      Code,

      // Font styling
      FontColor,
      FontBackgroundColor,

      // Headings - quan trọng cho cấu trúc bài viết
      Heading,

      // Lists - hữu ích cho liệt kê thông tin
      List,

      // Links - quan trọng cho tham chiếu và liên kết
      Link,
      LinkImage,
      AutoLink,

      // Images - cần thiết cho tin tức
      Image,
      ImageCaption,
      ImageResize,
      ImageStyle,
      ImageToolbar,
      ImageUpload,
      ImageInsert,

      // Tables - hữu ích cho hiển thị dữ liệu
      Table,
      TableToolbar,
      TableProperties,
      TableCellProperties,
      TableColumnResize,
      TableCaption,

      // Text alignment
      Alignment,

      // Block elements
      BlockQuote,
      HorizontalLine,

      // Utilities
      RemoveFormat,
      TextTransformation,
      PasteFromOffice,

      // Strapi specific
      StrapiMediaLib,
      StrapiUploadAdapter,
    ],
    toolbar: {
      items: [
        "heading",
        "|",
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "code",
        "|",
        "fontColor",
        "fontBackgroundColor",
        "|",
        "alignment",
        "|",
        "numberedList",
        "bulletedList",
        "|",
        "link",
        "strapiMediaLib",
        "insertImage",
        "|",
        "insertTable",
        "blockQuote",
        "horizontalLine",
        "|",
        "removeFormat",
        "|",
        "undo",
        "redo",
      ],
      shouldNotGroupWhenFull: true,
    },
    fontColor: {
      columns: 5,
      documentColors: 10,
      colors: [
        {
          color: "hsl(0, 0%, 0%)",
          label: "Đen",
        },
        {
          color: "hsl(0, 0%, 30%)",
          label: "Xám đậm",
        },
        {
          color: "hsl(0, 0%, 60%)",
          label: "Xám",
        },
        {
          color: "hsl(0, 0%, 90%)",
          label: "Xám nhạt",
        },
        {
          color: "hsl(0, 0%, 100%)",
          label: "Trắng",
        },
        {
          color: "hsl(0, 75%, 60%)",
          label: "Đỏ",
        },
        {
          color: "hsl(30, 75%, 60%)",
          label: "Cam",
        },
        {
          color: "hsl(60, 75%, 60%)",
          label: "Vàng",
        },
        {
          color: "hsl(90, 75%, 60%)",
          label: "Xanh lá nhạt",
        },
        {
          color: "hsl(120, 75%, 60%)",
          label: "Xanh lá",
        },
        {
          color: "hsl(150, 75%, 60%)",
          label: "Xanh lá đậm",
        },
        {
          color: "hsl(180, 75%, 60%)",
          label: "Xanh ngọc",
        },
        {
          color: "hsl(210, 75%, 60%)",
          label: "Xanh dương nhạt",
        },
        {
          color: "hsl(240, 75%, 60%)",
          label: "Xanh dương",
        },
        {
          color: "hsl(270, 75%, 60%)",
          label: "Tím",
        },
      ],
    },
    fontBackgroundColor: {
      columns: 5,
      documentColors: 10,
      colors: [
        {
          color: "hsl(0, 0%, 0%)",
          label: "Đen",
        },
        {
          color: "hsl(0, 0%, 30%)",
          label: "Xám đậm",
        },
        {
          color: "hsl(0, 0%, 60%)",
          label: "Xám",
        },
        {
          color: "hsl(0, 0%, 90%)",
          label: "Xám nhạt",
        },
        {
          color: "hsl(0, 0%, 100%)",
          label: "Trắng",
        },
        {
          color: "hsl(0, 75%, 60%)",
          label: "Đỏ",
        },
        {
          color: "hsl(30, 75%, 60%)",
          label: "Cam",
        },
        {
          color: "hsl(60, 75%, 60%)",
          label: "Vàng",
        },
        {
          color: "hsl(90, 75%, 60%)",
          label: "Xanh lá nhạt",
        },
        {
          color: "hsl(120, 75%, 60%)",
          label: "Xanh lá",
        },
        {
          color: "hsl(150, 75%, 60%)",
          label: "Xanh lá đậm",
        },
        {
          color: "hsl(180, 75%, 60%)",
          label: "Xanh ngọc",
        },
        {
          color: "hsl(210, 75%, 60%)",
          label: "Xanh dương nhạt",
        },
        {
          color: "hsl(240, 75%, 60%)",
          label: "Xanh dương",
        },
        {
          color: "hsl(270, 75%, 60%)",
          label: "Tím",
        },
      ],
    },
    heading: {
      options: [
        {
          model: "paragraph",
          title: "Paragraph",
          class: "ck-heading_paragraph",
        },
        {
          model: "heading1",
          view: "h1",
          title: "H1",
          class: "ck-heading_heading1",
        },
        {
          model: "heading2",
          view: "h2",
          title: "H2",
          class: "ck-heading_heading2",
        },
        {
          model: "heading3",
          view: "h3",
          title: "H3",
          class: "ck-heading_heading3",
        },
        {
          model: "heading4",
          view: "h4",
          title: "H4",
          class: "ck-heading_heading4",
        },
        {
          model: "heading5",
          view: "h5",
          title: "H5",
          class: "ck-heading_heading5",
        },
        {
          model: "heading6",
          view: "h6",
          title: "H6",
          class: "ck-heading_heading6",
        },
      ],
    },
    image: {
      resizeOptions: [
        {
          name: "resizeImage:original",
          label: "Kích thước gốc",
          value: null,
        },
        {
          name: "resizeImage:25",
          label: "25%",
          value: "25",
        },
        {
          name: "resizeImage:50",
          label: "50%",
          value: "50",
        },
        {
          name: "resizeImage:75",
          label: "75%",
          value: "75",
        },
      ],
      toolbar: [
        "imageTextAlternative",
        "toggleImageCaption",
        "|",
        "imageStyle:inline",
        "imageStyle:alignLeft",
        "imageStyle:alignCenter",
        "imageStyle:alignRight",
        "|",
        "resizeImage",
      ],
      styles: {
        options: [
          "inline",
          "alignLeft",
          "alignCenter",
          "alignRight",
          "alignBlockLeft",
          "alignBlockRight",
          "block",
          "side",
        ],
      },
    },
    table: {
      contentToolbar: [
        "tableColumn",
        "tableRow",
        "mergeTableCells",
        "tableProperties",
        "tableCellProperties",
        "toggleTableCaption",
      ],
    },
    link: {
      decorators: {
        openInNewTab: {
          mode: "manual",
          label: "Mở trong tab mới",
          attributes: {
            target: "_blank",
            rel: "noopener noreferrer",
          },
        },
        downloadable: {
          mode: "manual",
          label: "Tải xuống",
          attributes: {
            download: "file",
          },
        },
      },
    },
    list: {
      properties: {
        styles: true,
        startIndex: true,
        reversed: true,
      },
    },
  },
};

const myConfig: PluginConfig = {
  presets: [newsPreset],
};

export default {
  register() {
    setPluginConfig(myConfig);
  },
};
